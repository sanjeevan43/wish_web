/**
 * GIF Generator - Creates animated GIFs from canvas frames
 */

import GIF from 'gif.js';

/**
 * Create an animated GIF from a render function
 * @param {Function} renderFrame - Function that renders frame (ctx, frameIndex, totalFrames)
 * @param {number} width - Canvas width
 * @param {number} height - Canvas height
 * @param {number} totalFrames - Number of frames to generate
 * @param {number} delay - Delay between frames in ms
 * @returns {Promise<Blob>}
 */
export async function createAnimatedGif(renderFrame, width, height, totalFrames, delay = 50) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        const gif = new GIF({
            workers: 2,
            quality: 10,
            width,
            height,
        });

        // Render and capture each frame
        for (let i = 0; i < totalFrames; i++) {
            ctx.clearRect(0, 0, width, height);
            renderFrame(ctx, i, totalFrames);
            gif.addFrame(canvas, { delay, copy: true });
        }

        gif.on('finished', (blob) => resolve(blob));
        gif.on('error', (error) => reject(error));
        gif.render();
    });
}
