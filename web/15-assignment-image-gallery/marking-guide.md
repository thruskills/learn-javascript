# Marking guide for "Image gallery"

## Looping through the images

<dl>
<dt>Creating the loop</dt>
<dd>Four marks for this — the actual solution is fairy simple, but there are a few details to get right (any suitable loop type can be used):
<ol>
  <li>The initializer should start at 1, and the loop should iterate until a value of 5. This is useful, as the first image has the number 1 in its filename, then 2, 3, etc.</li>
  <li>The iterator should add 1 to the initializer after each iteration.</li>
</ol>
</dd>
<dt>Building the image path for each loop iteration</dt>
<dd>Three marks for this. The student basically just needs to replace the <code>xxx</code> placeholder with a string concatenation that will use the initializer to build the image path in each case. The pattern we need is this: <code>'images/pic' + i + '.jpg'</code>.</dd>
</dl>

## Adding an onclick handler to each thumbnail image

<dl>
<dt>Find the value of the src attribute of the current image.</dt>
<dd>Four marks for this — it is just a one line solution, but the specifics are quite tricky. You can't just do something like:
<ul>
  <li><code>newImage.getAttribute('src');</code></li>
  <li> or even just <code>'images/pic' + i + '.jpg'</code></li>
</ul>

Because the event handlers will be applied after the loop has run, therefore we will just get the <code>src</code> of the last image each time. You need to grab the <code>src</code> value from the event target in each case, so you need to pass the event object as a parameter to the handler function (<code>e</code>, <code>evt</code>, <code>event</code> or similar is fine), and then use something like this: <code>var imgSrc = e.target.getAttribute('src');</code> to get the <code>src</code> value. An anonymous function would make most sense:
<pre>
newImage.onclick = function(e) {
  var imgSrc = e.target.getAttribute('src');
    ...
}
</pre>
</dd>
<dt>Run a function, passing it the returned <code>src</code> value as a parameter.</dt>
<dd>Two marks for this. To run the function, you need to do something like this: <code>displayImage(imgSrc);</code></dd>
<dt>This event handler function should set the src attribute value...</dt>
<dd>Four marks for this. The student needs to define their own function, which is passed one parameter, the returned <code>src</code> value. The full-size image is reference by the <code>displayedImage</code> variable, so to make it display the correct image, we need something like <code>displayedImage.setAttribute('src', imgSrc);</code>.</dd>
</dl>

## Writing a handler that runs the darken/lighten button
<dl>
<dt>Adding an onclick handler</dt>
<dd>Two marks; the <code>&lt;button&gt;</code> is referenced in the <code>btn</code> variable, so the handler will need to look something like <code>btn.onclick = function() { ... }</code>. In this case, invoking a named function would also be ok, e.g. <code>btn.onclick = myFunction;</code></dd>
<dt>Checking the current class name set on the <code>&lt;button&gt;</code> element</dt>
<dd>Two marks; this again uses <code>getAttribute()</code>, and you just need to run this on the <code>btn</code> variable — <code>var btnClass = btn.getAttribute('class');</code>
<dt>The conditional statement</dt>
<dd>Six marks for this. It is not that complex, but there is a fair bit of work to do here. The conditional statement just needs to look like this:
<pre>
if(btnClass === 'dark') {
  ...  
} else {
  ...
}
</pre>
Then the student needs to grab the three lines provided in the assessment text, and modify it to set the things that are needed in each state. So a finished event handler could look something like this:
<pre>
btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
</pre>
</dd>
</dl>
