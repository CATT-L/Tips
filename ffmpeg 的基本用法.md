# ffmpeg 的基本用法



* 压缩音频

  ```shell
  ffmpeg -i "raw.mp3" -b:a 128k -acodec mp3 -ar 44100 -ac 1 "out.mp3"
  ```



* 切分音频

  ```shell
  ffmpeg -ss 43 -t 0.6791836734693889 -i raw.mp3 -acodec copy split.mp3
  ```

  