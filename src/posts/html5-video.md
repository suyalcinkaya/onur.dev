---
title: What I've Learned From Working With HTML5 Video Over A Month
description: I had a chance to work with HTML5 Video in a project over a month and here is what I've learned from it.
date: '2020-01-07'
imageUrl: ../static/html5-video.webp
imageAlt: 'yukaidu'
imageSource: 'https://www.yukaidu.com/'
---

I had a chance to work with HTML5 Video in a project over a month and am going to tell you my experiences and knowledge on it.

The project is a kind of simulation of an interactive video similar to Netflix's Bandersnatch series. The story goes upon user choices: adding tomato or pickle, choosing brioche or classic bread, whether garnishing with an egg or an avocado sauce or just skipping it, etc. You get the idea…

This article will be an introduction to HTML5 Video. Let's get started.

---

# 1. What is it, really?

A `<video>` element is used for playing videos or movies and specifying a video on an HTML document. For example, you could embed a music video on your web page for your visitors to listen to and watch. It is now widely implemented in the major browsers and it has support from major websites such as YouTube and Netflix.

It accepts attributes that specify how the video should be played. Attributes include src, preload, autoplay, loop and more. We'll cover these later on.

Here is a quick example to use it:

```html
<video src="foo.mp4" />
```

or

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
document.body.appendChild(video)
```

That's it! Piece of cake, right? 👏🏼

# 2. Browser Support

The numbers in the table specify the first browser version that fully supports the `<video>` element. See below for a full list of supported browsers.

<table>
  <thead>
  <tr>
    <th>Chrome</th>
    <th>IE</th>
    <th>Firefox</th>
    <th>Safari</th>
    <th>Opera</th>
  </tr> 
  </thead>
  <tbody>
  <tr>
    <td>4.0</td>
    <td>9.0</td>
    <td>3.5</td>
    <td>4.0</td>
    <td>10.5</td>
  </tr>
  </tbody>
</table>

See <a href="https://caniuse.com/#feat=video" target="_blank">here</a> for more detailed browser support.

# 3. Sources

You can define multiple sources by using the `<source>` element as a fallback in case the user's browser does not support one of them. For example:

```html
<video>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.mp4" type="video/mp4" />
</video>
```

> Sort the sources as webm, then ogg, and then mp4, since the mp4 is more widely supported from the browsers. It's a good practice of using it as playback.

Any text between the `<video>` and `</video>` tags will be displayed in browsers that do not support the `<video>` element. For example:

```html
<video>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.mp4" type="video/mp4" />
  Your browser does not support this video file.
</video>
```

When the browser parses the `<source>` tag, it uses the optional type attribute to help decide which file to download and play. If the browser supports WebM, it will play WebM video, if not, it will check if it can play MPEG-4 videos, and so on.

> If you're using the `<source>` element, I recommend you to add the type attribute to it. This way, the browser can immediately skip a format it doesn't support without trying to play it and wasting resources.

# 4. Formats and Browser Supports

## 4.1. MP4

The MP4 container format with the H.264 video codec and the AAC audio codec is natively supported by desktop/mobile Internet Explorer, Safari and Chrome, but Chromium and Opera do not support the format. IE and Chrome also support the MP3 audio codec in the MP4 container, but Safari does not. Firefox/Firefox for Android/Firefox OS supports the format in some cases, but only when a third-party decoder is available, and the device hardware can handle the profile used to encode the MP4.

See <a href="https://caniuse.com/#feat=mpeg4" target="_blank">here</a> for more detailed browser support.

## 4.2. WebM

The <a href="https://www.webmproject.org/" target="_blank">WebM</a> format is based on a restricted version of the Matroska container format. It always uses the VP8 or VP9 video codec and the Vorbis or Opus audio codec. WebM is natively supported in desktop and mobile Gecko (Firefox), Chrome and Opera, and support for the format can be added to Internet Explorer and Safari (but not on iOS) by installing an add-on.

See <a href="https://caniuse.com/#feat=webm" target="_blank">here</a> for more detailed browser support.

## 4.3. Ogg

The Ogg container format with the Theora video codec and the Vorbis audio codec is supported in desktop/mobile Gecko (Firefox), Chrome, and Opera, and support for the format can be added to Safari (but not on iOS) by installing an add-on. The format is not supported in Internet Explorer in any way.

See <a href="https://caniuse.com/#feat=ogv" target="_blank">here</a> for more detailed browser support.

<table>
  <thead>
  <tr>
    <th>Browser</th>
    <th>MP4</th>
    <th>WebM</th>
    <th>Ogg</th>
  </tr> 
  </thead>
  <tbody>
  <tr>
    <td>IE</td>
    <td>+</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Chrome</td>
    <td>+</td>
    <td>-</td>
    <td>+</td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>+</td>
    <td>+</td>
    <td>+</td>
  </tr>
  <tr>
    <td>Safari</td>
    <td>+</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Opera</td>
    <td>+</td>
    <td>+</td>
    <td>+</td>
  </tr>
  </tbody>
</table>

\*From 25+.

# 5. Codecs

You can think of a video file as a container (like a ZIP file), that contains the encoded video stream and an audio stream. There are many different types of container formats and unfortunately, there isn't a single 'one-ring' format that will work in all browsers.
Thankfully, we can get coverage for all modern (and mobile) browsers using only two formats:
WebM typically packages Vorbis or Opus audio with VP8/VP9 video. This is supported in all modern browsers, though older versions may not work.
MP4 often packages AAC or MP3 audio with H.264 video. This is supported also supported in all modern browsers, as well as Internet Explorer.
Ogg tends to use Vorbis audio and Theora video. This is best supported in Firefox and Chrome but has been superseded by the better quality WebM format.

## 5.1. Common values with codecs:

- **video/ogg:** codecs="theora, vorbis"
- **video/mp4:** codecs="avc1.4D401E, mp4a.40.2"
- **video/webm:** codecs="vp8.0, vorbis"

# 6. Detecting Support

The canPlayType()method checks and returns a string whether the browser can play the specified video type or not.
It can return one of the following values:
"probably": The browser most likely supports this video type.
"maybe": The browser might support this video type.
"" (empty string): The browser does not support this video type.

Here is an example:

```js
const video = document.createElement('video')
console.log(video.canPlayType('video/mp4'))
// "probably"
console.log(video.canPlayType('video/webm'))
// "maybe"
```

# 7. Media Fragments

Adding a media fragment to the media URL, you can specify the exact portion you want to play. To add a media fragment, you simply add #t=[start_time],[end_time] to the media URL. For example, to play the video between seconds 8 through 15, you would specify:

```html
<video src="foo.mp4#t=8,15" />
```

You can also specify the times in hours:minutes:seconds, such as #t=00:16:23to start the video at sixteen-minute, twenty-three seconds in.

```html
<video src="foo.mp4#t=00:16:23" />
```

Or, to only play the fourth minute of the video, you would specify #t=,00:04:00.

```html
<video src="foo.mp4#t=,00:04:00" />
```

# 8. Methods

Methods that can be used with the `<video>` element are listed below:

## 8.1. canPlayType(format)

You already know that I've covered it up in the section: "6. Detecting Support".

## 8.2. load()

It plays the video from its current position.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.load()
```

## 8.3. play()

It re-loads the video element and reset the play head to the beginning of the video.

```js
const video = document.createElement('video');
video.src = 'foo.mp4';
video.play();
...
```

## 8.4. pause()

It pauses the video at its current position.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play().then(() => {
  video.pause()
})
```

# 9. Attributes

You can find the attributes that can be used with the `<video>` element below:

## 9.1. autoplay

Tells the browser to whether a video should start playing as soon as it is ready. If you do not specify, it takes false as default.

```html
<video src="foo.mp4" autoplay />
```

Be aware: Chrome's autoplay policies are changed in April of 2018. It is simple: If you would like to start the video immediately (using autoplay attribute), then you should include the muted attribute as well or the user has to get interacted with the video first (click, tap, etc.). It's very rational when you think from the user's perspective. Because, you know, nobody wants to get puzzled with the loud sound on entering a website.

## 9.2. controls

Tells the browser to include its built-in video controls like play/pause, volume, etc. If you do not specify, it takes false as default which means no controls will be shown.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.controls = true;
...
```

or

```html
<video src="foo.mp4" controls />
```

## 9.3. controlsList

Using the controlsList, you can customize(hide) Chrome's native media controls such as the download, fullscreen and remoteplayback buttons (Chrome 58+ only). It can include nodownload, nofullscreen, and noremoteplayback attributes.

```html
<video src="foo.mp4" controls controlsList="nodownload nofullscreen noremoteplayback" />
```

## 9.4. crossorigin

It indicates whether to use CORS to fetch the related content or not.

```html
<video src="foo.mp4" crossorigin />
```

## 9.5. height

Sets or gets the value of the height attribute of a video in CSS pixels to control the amount of height the video will occupy on the page.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.height = 1080;
...
```

or

```html
<video src="foo.mp4" height="1080" />
```

## 9.6. loop

It tells the browser to whether the video should be playing over again, every time it has finished. If you do not specify, it takes false as default.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.loop = true;
...
```

or

```html
<video src="foo.mp4" loop />
```

## 9.7. muted

Sets or gets whether the sound of a video should be turned off. If you do not specify, it takes false as default.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.muted = true;
...
```

or

```html
<video src="foo.mp4" muted />
```

## 9.8. playsinline  -  webkit-playsinline

A boolean attribute indicating that the video is to be played "inline", that is within the element's playback area. See <a href="https://webkit.org/blog/6784/new-video-policies-for-ios/" target="_blank">here</a> for detailed information.

```html
<video src="foo.mp4" playsinline webkit-playsinline />
```

## 9.9. poster

Sets or gets the value of the poster attribute of a video. You can think of the poster attribute as a savior of your `<video>` element. If the video stops playing or crashes, the poster image will be shown. Or if the file of the video element does not support in the browser, the poster image will be shown again. Or, if you want to show the video is loading/buffering, then using a loading gif in the poster attribute will be rational.

> The absence of this attribute does not imply that the video will always be played in fullscreen.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play().then(() => {
  console.log(video.played)
  // true
})
```

## 9.10. preload

It intends to provide a hint to the browser about what the UA thinks will lead to the best user experience. Sets or gets the value of the preload attribute of a video. If you do not specify, it's value depends on the browser default.

- **none:** It tells the browser should _**NOT load the video**_ when the page loads.
- **metadata:** It tells the browser should _**load only metadata**_ when the page loads.
- **auto:** It tells the browser should _**load the entire video**_ when the page loads.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.preload = "auto";
...
```

or

```html
<video src="foo.mp4" preload="auto" />
```

> `<video src="foo.mp4" preload="auto" />` is the same as `<video src="foo.mp4" preload />`.

## 9.11. src

It tells the browser which/what source the video will play from. It can be a local resource within your website or something exposed through a public URL.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
...
```

or

```html
<video src="foo.mp4" />
```

## 9.12. volume

Sets or gets the audio volume of a video. If you do not specify, it takes 1 as default.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.volume = "0.4";
...
```

or

```html
<video src="foo.mp4" volume="0.4" />
```

## 9.13. width

Sets or gets the value of the width attribute of a video in CSS pixels to control the amount of width the video will occupy on the page.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.width = 1920;
...
```

or

```html
<video src="foo.mp4" width="1920" />
```

# 10. Properties

Properties that used mainly with the `<video>` element are listed below:

## 10.1. currentSrc

Returns the URL of the current video.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
...

console.log(video.currentSrc);
// "foo.mp4"
```

## 10.2. currentTime

Sets or gets the current playback position in a video (in seconds).

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play()

console.log(video.currentTime)
// "4.0815"
```

## 10.3. duration

Returns a number, representing the length of the video, in seconds. If no video is set, "NaN" is returned. If the video is streamed and has no predefined length, "Inf" is returned.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.load();
...

console.log(video.duration);
// "15.1623"
```

## 10.4. ended

Returns whether the playback of the video has ended or not.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play()

console.log(video.ended)
// false
```

## 10.5. error

Returns an error state of the video.

- **1 = MEDIA_ERR_ABORTED:** Fetching process aborted by user.
- **2 = MEDIA_ERR_NETWORK:** Error occurred when downloading.
- **3 = MEDIA_ERR_DECODE:** Error occurred when decoding.
- **4 = MEDIA_ERR_SRC_NOT_SUPPORTED:** Video not supported.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play()

console.log(video.error)
// 4
```

## 10.6. paused

Returns whether a video is paused or not.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play().then(() => {
  console.log(video.paused)
  // false
})
```

## 10.7. playbackRate

Sets or gets the speed of the video playback. If you do not specify, it takes 1 as default.

```js
const video = document.createElement('video');
video.src = "foo.mp4";
video.playbackRate = 1.516;
...
```

or

```html
<video src="foo.mp4" playbackRate="1.516" />
```

## 10.8. played

Returns a TimeRanges object representing the played parts of the video.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play()

console.log(video.played)
// TimeRanges {length: 1}
```

## 10.9. readyState

Returns the current ready state of a video.

- **0 = HAVE_NOTHING:** No information whether or not the video is ready.
- **1 = HAVE_METADATA:** Metadata for the video is ready.
- **2 = HAVE_CURRENT_DATA:** Data for the current playback position is available, but not enough data to play the next frame/millisecond.
- **3 = HAVE_FUTURE_DATA:** Data for the current and at least the next frame is available.
- **4 = HAVE_ENOUGH_DATA:** Enough data available to start playing.

```js
const video = document.createElement('video')
video.src = 'foo.mp4'
video.play()

console.log(video.readyState)
// 4
```

# 11. Events

## 11.1. canplay

Fires when the browser can start playing the video.

```js
const video = document.querySelector('video')
video.addEventListener('canplay', (event) => {
  console.log('Video can start now.')
})
```

or

```js
video.oncanplay = (event) => {
  console.log('Video can start now.')
}
```

## 11.2. canplaythrough

Fires when the browser can play through the video up to its end without stopping for content buffering.

```js
const video = document.querySelector('video')
video.addEventListener('canplaythrough', (event) => {
  console.log('Video can played entirely without ever having to stop to buffer.')
})
```

or

```js
video.oncanplaythrough = (event) => {
  console.log('Video can played entirely without ever having to stop to buffer.')
}
```

## 11.3. ended

Fires when the video ends because the end of the media was reached.

```js
const video = document.querySelector('video')
video.addEventListener('ended', (event) => {
  console.log('Video is ended.')
})
```

or

```js
video.onended = (event) => {
  console.log('Video is ended.')
}
```

## 11.6. timeupdate

Fires when the current time of the video is changed.

```js
const video = document.querySelector('video')
video.addEventListener('timeupdate', (event) => {
  console.log(video.currenTime)
  // 4.815
})
```

or

```js
video.ontimeupdate = (event) => {
  console.log(video.currenTime)
  // 16.2342
}
```

# 12. Best Practices

Adding videos to your website can sometimes cause pain. Users love high-resolution videos, but if your website isn't optimized to handle them, such content can cause performance problems.

Here are a few tips:

- **Do not send a 1080p video to a mobile device like a phone:** That doesn't make much sense, the video will likely be too big for the screen, and the bandwidth required to send the video may use all of the user's limited data connection extremely quickly. Use 720p or 480p instead.

- **Use a CDN:** CDN is a network of servers that store cached copies of your site’s static assets. In addition to improving redundancy, CDNs ensure faster content delivery as the content is served from the nearest edge server. This is essential for large files such as videos. That way, users don’t have to wait forever for your videos to download and buffer.

- **Offer both standard (MP4) and edge source file types (WebM):** You reward users who have a client with advanced compression and quality capabilities (WebM) but provide a fallback to widely supported formats (MP4s).

- **Remove audio from muted videos:** If you have a video with the audio muted, you can remove the audio data from the video file to save on the size of the video.

- **Use data compression tools:** Data compression tools like Blazemp and HandBrake reduce the size of video files without degrading image quality. Smaller media files load faster, so you can save users a huge amount of time by compressing all of your videos.

- **Use poster image:** A poster image that can be displayed until playback begins. This gives viewers a meaningful idea of the content without needing to download video or start playback.

- **Specify the video size:** In your HTML or CSS, be sure to define the width and height of videos so that the browser can allocate the necessary bandwidth with no extra work.

# 13. Centering Video

Centering the `<video>` can be quiet annoying if you are trying to make it responsive for both desktop, mobile, or tablet, etc. Don't worry, you can find a demo below using just CSS.

There will be a video and a parent of it as a container for styling.

```css
.video-container {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

video {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}
```

Then use the classes in your view.

```html
<div class="video-container">
  <video src="foo.mp4" />
</div>
```

# 14. Controlling Fullscreen

If you are planning the control fullscreen mode on your own, you should not forget the behavior of all browsers, because the native functions in every one of them are different. Here are the two quick snippets for getting in to and out from fullscreen mode.

## Entering the fullscreen:

```js
const docElm = document.documentElement
if (docElm.requestFullscreen) {
  docElm.requestFullscreen()
} else if (docElm.mozRequestFullScreen) {
  docElm.mozRequestFullScreen() /* Firefox */
} else if (docElm.webkitRequestFullScreen) {
  docElm.webkitRequestFullScreen() /* Chrome, Safari and Opera */
} else if (docElm.msRequestFullscreen) {
  docElm.msRequestFullscreen() /* IE/Edge */
}
```

## Exiting from the fullscreen:

```js
const docElm = document.documentElement
if (document.exitFullscreen) {
  document.exitFullscreen()
} else if (document.mozCancelFullScreen) {
  document.mozCancelFullScreen() /* Firefox */
} else if (document.webkitExitFullscreen) {
  document.webkitExitFullscreen() /* Chrome, Safari and Opera */
} else if (document.msExitFullscreen) {
  document.msExitFullscreen() /* IE/Edge */
}
```

# 15. Bonus: HandBreak - Open Source Video Transcoder

HandBrake is a tool for converting video from nearly any format to a selection of modern, widely supported codecs. You can download directly from <a href="https://handbrake.fr/downloads.php" target="_blank">here</a>.

Here are a few great features:

- You can transcode multiple videos with batch scanning and queueing of encodes.
- Supports many presets.
- Constant Quality or Average Bitrate Video Encoding.
- <a href="https://github.com/HandBrake/HandBrake/commits/master" target="blank">It's also maintaining actively on GitHub</a>.
- Check out the all features <a href="https://handbrake.fr/features.php" target="_blank">here</a>.

Also, I would like to thank my manager Erdem Bıyık for suggesting this free tool to optimize videos. That worked great on optimizing videos (reducing size while keeping the quality, transcoding for mobile devices, etc) for user experience.

# Conclusion

HTML5 Video players started simple but have grown quite advanced (think YouTube and Netflix), and since it's all just HTML, CSS, and JavaScript, any developer can create impressive players. Including video on the modern web is easier than ever before and opens some amazing new possibilities.

What will you do now and next? 🙌🏼

# Don't stop learning!

There will be an advanced version of this article with many examples for sure. I hope, it helps you to understand and get started with HTML5 Video. If you know anyone that would benefit from this guide I would love if you recommended it to them. Thank you for following this guide and reading through to the end, see you on another one…