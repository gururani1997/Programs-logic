class FileSystem {
  constructor() {
    this.paths = new Set();
  }

  addPath(path) {
    this.paths.add(path);
  }
  deletePath() {
    for (let p of this.paths) {
      if (p === path || p.startsWith(path + "/")) {
        this.paths.delete(p);
      }
    }
  }
  listFiles(pathPrefix = "") {
    return Array.from(this.paths)
      .filter((p) => p.startsWith(pathPrefix))
      .sort();
  }
}
const fs = new FileSystem();
fs.addPath("/root/documents/work/reports.docx");
fs.addPath("/root/documents/work/notes.txt");
fs.addPath("/root/documents/personal/photo.jpg");
fs.addPath("/root/music/song.mp3");

console.log(fs.listFiles("/root/music"));
