/**
 * Font config and helper for the app.
 *
 * Notes:
 * - Web: fonts are loaded via `global.css` using Google Fonts import.
 * - Native (iOS/Android): bundle TTF/OTF files into `assets/fonts/` and call `loadFonts()` from your root.
 */
import * as Font from "expo-font";

export const fonts = {
  Inter_400: "Inter-Regular",
  Inter_500: "Inter-Medium",
  Inter_600: "Inter-SemiBold",
  Inter_700: "Inter-Bold",
};

export async function loadFonts(): Promise<void> {
  try {
    await Font.loadAsync({
      [fonts.Inter_400]: require("../../assets/fonts/Inter_24pt-Regular.ttf"),
      [fonts.Inter_500]: require("../../assets/fonts/Inter_24pt-Medium.ttf"),
      [fonts.Inter_600]: require("../../assets/fonts/Inter_24pt-SemiBold.ttf"),
      [fonts.Inter_700]: require("../../assets/fonts/Inter_24pt-Bold.ttf"),
    });
  } catch (e) {
    console.warn("Font loading failed; falling back to system fonts.", e);
  }
}

export default { fonts, loadFonts };
