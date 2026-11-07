---
layout: page
title: Back Up Your Project Code on GitHub
permalink: /lab/git-guide/
noindex: true
sitemap: false
---

<style>
  .git-guide pre, .git-guide pre code { white-space: pre-wrap; word-break: break-word; }
  .git-guide .highlighter-rouge { position: relative; }
  .git-guide .copy-btn { position: absolute; top: .4rem; right: .4rem; font-size: .8rem; padding: .1rem .5rem; border: 1px solid #bbb; border-radius: 4px; background: #fff; cursor: pointer; }
</style>

<div class="git-guide" markdown="1">

An agent edits many files at once, and a change can break a check that passed earlier. A *checkpoint* (git commit) saves the project folder so you can restore it, and GitHub keeps a private copy of every checkpoint. Claude runs the git commands, and you approve each one. Setup takes about 20 minutes.

**Codex:** the same prompts work; Codex reads `AGENTS.md` instead of `CLAUDE.md`. In *Ask for approval* mode, when it asks to run `git add`, `git commit`, `git push`, or `gh` outside the sandbox, choose *Yes, and don't ask again* (`p`).

## Setup

1. Sign up at <https://github.com/signup> with your @utexas.edu email.

2. Open Claude Code in your project folder and paste:

   ```text
   Download https://cmsmlab.github.io/lab/git-guide/git-rules.md and add its contents to the end of CLAUDE.md (create CLAUDE.md if needed; also add them to AGENTS.md if it exists). Then install the GitHub command-line tool (gh) if it is missing: brew install gh if I have Homebrew, winget install GitHub.cli on Windows; otherwise tell me what to download from cli.github.com.
   ```

3. In a new terminal window (Mac: Terminal; Windows: PowerShell), run

   ```text
   gh auth login --web --git-protocol https
   ```

   Answer **Yes** if asked, press Enter, paste the code in the browser page that opens, and click *Authorize*.

4. Back in Claude Code, paste, with your name and EID filled in:

   ```text
   Set up git in this folder if needed, with my name <your full name> and email <your EID>@utexas.edu. Write a .gitignore, show me the files you will save, and wait for my OK. Then save a checkpoint, create a private GitHub repository named <project-name> from this folder, push, invite the GitHub user cmsmlab as a collaborator, and give me the link.
   ```

   *Check:* the link shows your files and a *Private* label.

## Regular use

```text
Run the checks. If they pass, save a checkpoint.
```

The rules make Claude push each checkpoint to GitHub.

```text
What changed since the last checkpoint?
```

```text
The convergence test fails now. Restore the code from the last checkpoint where it passed.
```

**Do not commit** passwords or keys, files over 10 MB, results you can regenerate, or copyrighted PDFs. If you did:

```text
I committed <file> by mistake. Remove it from the history safely; explain first.
```

**Optional:** GitHub Education (<https://education.github.com>) gives graduate students free GitHub Pro. **Stuck?** Paste the exact error into Claude and ask what to do, or ask me or a labmate.

</div>

<script>
  document.querySelectorAll('.git-guide div.highlighter-rouge').forEach(function (block) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(block.querySelector('code').innerText.trim()).then(function () {
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
    });
    block.appendChild(btn);
  });
</script>
