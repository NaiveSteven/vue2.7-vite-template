import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue2-jsx';
import serverProxy from './build/proxy';
import autoImport from 'unplugin-auto-import/vite';
import autoImportComponents from 'unplugin-vue-components/vite';
import unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import { defineConfig, loadEnv } from 'vite';
import { pathResolve, wrapperEnv } from './build/utils';

export default ({ mode, command }) => {
  const root = process.cwd();
  const isBuild = command === 'build';

  const env = loadEnv(mode, root);

  const { VITE_PUBLIC_PATH, VITE_OUTPUT_DIR, VITE_PORT, VITE_LEGACY } =
    wrapperEnv(env);

  const plugins = [
    vue(),
    vueJsx(),
    autoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue', 'vue-router'],
      dirs: ['src/hooks'],
      eslintrc: {
        enabled: true,
      },
    }),
    autoImportComponents({
      extensions: ['vue', 'md', 'tsx'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/],
      dts: 'components.d.ts',
    }),
    unocss({
      transformers: [transformerVariantGroup(), transformerDirective()],
    }),
  ];

  /**
   * vite 默认打包文件带有 ES6 语法，在旧版浏览器中是不支持的。
   * 为了支持旧版浏览器，可以在 .env.production 中开启 VITE_LEGACY 设置
   */
  if (isBuild && VITE_LEGACY) {
    plugins.push(legacy());
  }
  return defineConfig({
    root,
    base: VITE_PUBLIC_PATH,
    plugins,
    resolve: {
      alias: {
        '@': pathResolve('./src'),
      },
    },
    server: {
      host: true,
      port: VITE_PORT,
      proxy: serverProxy,
    },
    build: {
      target: 'es2015',
      outDir: VITE_OUTPUT_DIR,
      brotliSize: false, // 关闭 brotli 压缩大小报告，可提升构建速度
      chunkSizeWarningLimit: 2000, // chunk 大小警告的限制（以 kbs 为单位）
    },
  });
};
