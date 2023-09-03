---
layout: post
title:  "Setting up this site: a multi-year lesson in not reinventing the wheel"
date:   2023-09-03 18:07:00 -0400
tags: tech setup
---

### Me trying to build websites

A 3-day weekend with no big plans and an out-of-town girlfriend prompted me to come back to "the
blog". My first post was on Medium, as I was hesitant to deal with setting up my own website
(again). As I mentioned in [my last (and first) blog]({% post_url 2023-08-09-getting-started-is-the-hardest-part %}),
I've started a few different personal homepages that have sputtered out. I used to almost view these
"flameouts" as a personal failing -- "Am I really not motivated enough to do the 'bare minimum' of
making my own website's UI?". So I'd tell myself "I'll come back to this later", and then I just...
wouldn't.

But after some time in industry, I've realized that I just don't like frontend that much! Don't
get me wrong, I like *understanding* how the frontend works, and I like being able to hack out
basic UIs to add features or fix bugs for users. But fighting with React build/bundle tools and
massaging CSS to align some buttons is just **not** how I want to spend my free time.

### How I've been writing

That said, I also wasn't too happy with the Medium writing UI (no built-in footnotes in 2023?). 
Since graduating from college, almost all of my writing has been at work, where I've used two
classes of writing UIs:
1. Cloud-based WYSIWYG (i.e. Google Docs / ClickUp docs): feature-ful editors with advanced
   text formatting and multimedia. Great for collaborative design docs and sharing results
   with the team.
2. Markdown: Banging out Markdown in VSCode or GitHub/Gerritt UIs to share technical information
   with other people working in my repository.

### Connecting the dots

One of my previous attempts at setting up a website involved building a Gatsby React app & hosting
it on GitHub pages (you can see [my repo's commit history](github.com/jenklu/jenklu.github.io)).
I recall approximately the following thought process when I was going about this setup:
1. Dealing with the actual web server seems difficult to figure out - maybe I'll use this GitHub
   pages thing.
2. Hmm, GitHub pages has some kind of built-in Markdown rendering support. Interesting.
3. React is cool and I haven't really used it much. I wanna try building a site with React, that
   seems fun. I'll ignore that built-in Markdown support.
I *did* end up building a[^1] Gatsby React site...but my site was basically a static "About Me"
page, so there really wasn't any need for React at all[^2].

Coming back a few years later, where I

a. want to start writing, and am used to writing Markdown

b. don't want to spend my free time building a blogging platform or frontend frameworks, 

the GH pages rendering from Step 2. is a whole lot more appealing.

So I decided to just follow [GitHub's docs](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll).
I hit a few speedbumps, but they were mostly due to the fact that I hadn't
done any dev on my personal laptop in a while[^3]. Now that I've got my Homebrew & Ruby & Jekyll up and
running, it seems to be pretty smooth sailing. Hot-reloading the blog posts is definitely a
nice feature for while I'm writing.

Overall, I'm happy with this setup for blogging, and I'm optimistic that I'll continue to write
here. I'll probably still cross-post stuff over to Medium as well just for "reach" though.

### Addendum: Domain Names
The default GitHub pages URL is OK, I guess, but I kinda wanted my blog to have my own domain, even
if I wasn't gonna deal with hosting its contents or building the frontend.

So I started researching domain services. GoDaddy still has a vaguely bad rep, but I didn't dig in
enough to figure out why (maybe it was just those old ads?). I started looking at other options[^4],
and eventually came to a list that included NameCheap. Seeing their logo dredged up an old memory --
I *did* publish that original Gatsby/React web app, and I *did* host it at a custom domain from
NameCheap. They actually gave me the domain for free because I was still a student (or at least had
a student email), which was nice. And I didn't remember having any qualms with their interface, so
I decided to just go back to them.

I debated going with a more clever domains (lucaswrit.es was considered!), but no one had picked up
my lucasjenkins.me domain in the years since I let it slip. So $42.70 later, I'm the proud owner of
lucasjenkins.me for 5 years. I followed [Namecheap's docs](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/),
and now lucasjenkins.me points to my GitHub pages. Success! All that's left to do is use GitHub's
built-in "Enforce HTTPS", but apparently it can take some time before the DNS updates propagate and
that button is enabled in the GitHub UI. But I'm calling it a day for now. If I end up writing again
tomorrow, maybe I'll come back and see if that button's clickable.

[^1]: **very** ugly, in retrospect.
[^2]: And after spending enough time fighting with React tooling, I kinda wonder if this is true for a lot of sites...https://htmx.org/ is very buzzy. Although in my company's current codebase, the most painful part isn't "React" or "Material UI" or "vanilla JS" or "fomantic-ui" on their own, it's that we use all these different frontend frameworks. When you have to do something in a new area of the codebase, you may also have to learn a whole new framework. I only understand fomantic-ui and htmx on a very surface level, but they seem like approaches that, *if used consistently*, could maybe be a nicer experience (both dev and user)?
[^3]: My [homebrew install was borked](https://github.com/Homebrew/brew/issues/14187), and I also ran into [this issue](https://github.com/Homebrew/brew/issues/9420). Un-shallowing my clone took so long that I didn't finish setting up this blog until Day 2 of the long weekend. Apparently GitHub didn't like HomeBrew users shallow cloning and then hitting GitHub's servers hard whenever they needed a not-shallow clone. [Derrick Stollee](https://github.blog/author/dstolee/) has a [great blog](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) describing shallow vs. partial clones, which I've recently dug deep into at work. I thought Copia was all about building frontends and supporting various PLC vendors, but just running a Git hosting service on its own involves some interesting problems.
[^4]: porkbun.com was pretty highly recommended.
