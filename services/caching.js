import { Font, Image, Asset } from 'expo';

export function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
