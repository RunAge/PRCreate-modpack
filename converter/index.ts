import mrpack from './modrinth.index.json';
const regex = /https:\/\/cdn\.modrinth\.com\/data\/([^/]+)\//;
const downloads = mrpack.files.flatMap((file) => {
  return file.downloads.map((download) => {
    const match = download.match(regex);
    return `./bin/packwiz mr install -y ${match[1]}`
  })
});

await Bun.write('downloads.sh', downloads.join(' && \\\n'))
