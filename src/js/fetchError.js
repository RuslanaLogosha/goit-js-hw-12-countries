import { error } from '@pnotify/core';

export default function onFetchError() {
    error({
    text: "Надо ввести буквы :-)"
  })
}