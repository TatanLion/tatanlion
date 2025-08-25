import gulp from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import notify from 'gulp-notify';
import webp from 'gulp-webp';

const { dest, parallel, src, watch } = gulp;

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
};

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('public/img'))
        .pipe(notify({ message: 'Imagen Completada' }));
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('public/img'))
        .pipe(notify({ message: 'Imagen WebP Completada' }));
}

function watchArchivos() {
    watch(paths.imagenes, imagenes);
    watch(paths.imagenes, versionWebp);
}

export { imagenes, versionWebp, watchArchivos };
export default parallel(imagenes, versionWebp, watchArchivos);