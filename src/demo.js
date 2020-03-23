import {Elm} from './Main.elm';
import * as Liff from 'elm-liff';

// eslint-disable-next-line require-jsdoc
function main() {
  initializeDebugger();
  Liff.init(Elm.Main, {
    flags: {
      liffId: process.env.LIFF_ID,
    },
    node: document.querySelector('main'),
  }).catch((err) => alert(err));
}

// eslint-disable-next-line require-jsdoc
function initializeDebugger() {
  if (process.env.DEBUG === '1') {
    new VConsole();
  }
}

main();
