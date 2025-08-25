/**
 * Your function must read the image from the given path using Jimp
 * Then, it must return an array containing all color components (red, green then blue, in this order) of
 * each pixel of the image (from left to right, from top to bottom)
 * For the given image (6pixels.png), composed of 2 rows of 3 pixels (yellow, magenta, cyan, then green, blue, red),
 * the result should be:
 * [255, 255, 0, 255, 0, 255, 0, 255, 255, 0, 255, 0, 0, 0, 255, 255, 0, 0]
 * [   yellow  ,   magenta  ,    cyan    ,  green   ,  blue    ,    red   ]
 * You should use `getPixelColor` and the `intToRGBA` function (from Jimp)
 * You want to make it harder?
 * - don't use the `getPixelColor` method, but read the components from the `bitmap` attribute directly (it's a pixel matrix)
 * - don't use the `intToRGBA`, but get the 3 components from the integer directly (an integer is 32 bits, containing all 3 colors, 8 bits each)
 * @param path image path relative to project root
 * @returns promise resolved with an array of number, representing colors of pixels of the image
 */

export default async function (path: string): Promise<number[]> {
  const bytes: number[] = [];
  return bytes;
}
