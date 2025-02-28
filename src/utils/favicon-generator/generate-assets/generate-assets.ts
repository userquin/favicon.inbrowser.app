import type { GeneralInfoOptions } from "../general-info";
import type { DesktopBrowserOptions } from "../desktop-browser";
import type { PWAOptions } from "../pwa";
import type { iOSWebClipOptions } from "../ios-web-clip";
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";
import { generateAssets as generateiOSAssets } from "../ios-web-clip";
import { generateAssets as generatePWAAssets } from "../pwa";
import { generateAssets as generateDesktopBrowserAssets } from "../desktop-browser";
import { generateAssets as generateGeneralAssets } from "../general-info";

export interface GenerateAssetsOptions {
  generalInfo: GeneralInfoOptions;
  desktopBrowser: DesktopBrowserOptions;
  pwa: PWAOptions;
  iosWebClip: iOSWebClipOptions;
}

interface Asset {
  name: string;
  blob: Blob;
}

export async function generateAssets(
  image: Blob | undefined,
  options: GenerateAssetsOptions
): Promise<Blob> {
  const assets: Asset[] = [];

  const assetsList = await Promise.all([
    generateiOSAssets(image, options.iosWebClip),
    generatePWAAssets(image, options.pwa),
    generateDesktopBrowserAssets(image, options.desktopBrowser),
    generateGeneralAssets(options.generalInfo),
  ]);

  for (const asset of assetsList) {
    assets.push(...asset);
  }

  const zipFileWriter = new BlobWriter();

  const zipWriter = new ZipWriter(zipFileWriter);
  for (const asset of assets) {
    await zipWriter.add(asset.name, new BlobReader(asset.blob));
  }

  await zipWriter.close();
  const zipFileBlob = await zipFileWriter.getData();
  return zipFileBlob;
}
