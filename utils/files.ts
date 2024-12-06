
export async function* listFiles(directory: string, filter?: {
  endsWith?: string,
}): AsyncGenerator<Deno.DirEntry, void, unknown> {
  for await (const it of Deno.readDir(directory)) {
    if (!it.isFile) {
      continue;
    }

    if (!filter) {
      yield it;
      continue;
    }

    if (!filter.endsWith || it.name.endsWith(filter.endsWith)) {
      yield it;
    }
  }
}
