import imglyRemoveBackground from "@imgly/background-removal"
 
let image_src: ImageData | ArrayBuffer | Uint8Array | Blob | URL | string = ...;
 
imglyRemoveBackground(image_src).then((blob: Blob) => {
  // The result is a blob encoded as PNG. It can be converted to an URL to be used as HTMLImage.src
  const url = URL.createObjectURL(blob);
})

type Config = {
  publicPath: string; // The public path used for model and wasm files
  debug: bool; // enable or disable useful console.log outputs
  proxyToWorker: bool; // Whether to proxy the calculations to a web worker. (Default true)
  model: 'small' | 'medium'; // The model to use. (Default "medium")
};

let config: Config = {
  progress: (key, current, total) => {
    console.log(`Downloading ${key}: ${(current} of ${total}`);
  }
}
