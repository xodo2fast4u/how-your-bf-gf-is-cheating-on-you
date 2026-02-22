(function () {
  // SVG Icons
  const svgIcons = {
    shield:
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="status-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg>',
    flag: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="status-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" /></svg>',
    heart:
      '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" class="status-icon"><path d="M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"/></svg>',
  };

  const signs = [
    "They have two or more phones and can never give you a straight answer about why they need them.",
    "When they share their location with you, it's never the right one. Somehow GPS only fails for them.",
    "They give their friends way more attention, energy, and time than they ever give you.",
    "They dodge your questions like a professional. You ask something simple, they change the subject.",
    'They hit you with the classic: "Believe whatever you want to believe." a guilty person\'s favorite escape route.',
    'They claim "they just repost everything" when you question suspicious content on their social media.',
    "They're hiding things from you their screen, their plans, their conversations. Secrecy is their second language.",
    'They swear their "hb" or "hg" is just a friend who would NEVER do that but conveniently refuse to test the theory.',
    "They openly flirt with the opposite gender right in front of you and act like it's no big deal.",
    "You asked them to cut someone off. They agreed. That person is still in the picture nothing changed.",
    "Their phone is permanently glued to their hand, yet they never answer your calls or texts on time.",
    "They've changed their phone password recently and won't tell you the new one.",
    "They suddenly care way more about their appearance new outfits, cologne, perfume but not for date nights with you.",
    "They come home later than usual and the explanations keep getting more creative.",
    "Physical and emotional intimacy has dropped significantly with no real explanation.",
    "They get extremely defensive when you ask the most basic, innocent questions about their day.",
    "There's a new 'friend' they keep mentioning that you've somehow never been introduced to.",
    "Their phone is always face-down on every surface. Always.",
    "Their browser history and chat histories are wiped clean on a regular basis.",
    "They have sudden, unexplained mood swings. Especially when they come home from being 'out.'",
    "They accuse YOU of cheating out of nowhere. Classic projection.",
    "Communication throughout the day has tanked. They used to text all day; now you're lucky to get a reply.",
    "There are unexplained charges or expenses that don't match up with what they told you they were doing.",
    "They start picking fights with you over absolutely nothing. Almost like they're looking for an excuse to leave.",
    "Their stories don't add up. Details change every time they retell where they were or who they were with.",
    "They can't look you in the eye when explaining where they've been.",
    "They suddenly have new music tastes, shows, or hobbies that didn't come from you. Someone else is influencing them.",
    'They\'re always "busy" but somehow that busy schedule never includes making time for you.',
    "Their social media activity is suspicious. Liking, commenting, and engaging with one particular person a little too much.",
    "They get visibly nervous, grab their phone, or freeze up whenever you walk near their screen.",
    "Notifications are turned off, hidden, or set to preview-off on their phone. They say it's for 'focus.'",
    'They have a "work husband" or "work wife" that they talk about constantly and a little too fondly.',
    "Weekend plans, nights out, and trips somehow never include you anymore.",
    "When you bring up concerns about the relationship, they gaslight you. Making you feel like the crazy one.",
    "There's new cologne or perfume in the mix that you definitely did not buy for them.",
    "They take phone calls in another room and close the door. Every. Single. Time.",
    "Their schedule has become mysteriously secretive. You used to know their plans. Now it's classified information.",
    "They stopped posting you on social media. You used to be all over their feed. Now you're invisible.",
    "Your gut keeps telling you something is wrong. You feel it in your chest. Don't ignore that.",
    "They randomly overcompensate with gifts, affection, or compliments out of nowhere. Guilt has a pattern.",
    "They mention one specific person's name just a little too often in conversation.",
    "Their friends act weird, awkward, or overly nice around you. Like they know something you don't.",
    "Their car is suddenly spotless. Cleaned seats, no receipts, air freshener. They're covering tracks.",
    "They start comparing you to other people: how they dress, how they act, what they do.",
    'They dismiss every concern you have as "overthinking" or "being insecure." Your feelings are never valid to them.',
    'They still have dating apps on their phone that they "forgot to delete". Weeks or months into the relationship.',
    "There are unaccounted gaps in their day. Hours where nobody knows where they were.",
    "They recently changed their phone PIN, lock screen, or Face ID settings without telling you why.",
    "They get annoyed or irritated when you show up unannounced. As if your presence is an inconvenience.",
    'When you confront them with evidence or concerns, they shut it down with: "You\'re crazy." End of discussion.',
  ];

  const listEl = document.getElementById("signsList");
  signs.forEach(function (text, i) {
    const card = document.createElement("div");
    card.className = "sign-card";
    card.setAttribute("role", "checkbox");
    card.setAttribute("aria-checked", "false");
    card.setAttribute("tabindex", "0");
    card.dataset.index = i;
    card.innerHTML =
      '<div class="sign-checkbox"><svg viewBox="0 0 24 24"><polyline points="4 12 10 18 20 6"></polyline></svg></div>' +
      '<div class="sign-content"><div class="sign-number">Sign #' +
      (i + 1) +
      '</div><div class="sign-text">' +
      text +
      "</div></div>";
    listEl.appendChild(card);
  });

  const checked = new Set();

  listEl.addEventListener("click", function (e) {
    const card = e.target.closest(".sign-card");
    if (!card) return;
    toggleCard(card);
  });

  listEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".sign-card");
      if (!card) return;
      e.preventDefault();
      toggleCard(card);
    }
  });

  function toggleCard(card) {
    const idx = parseInt(card.dataset.index);
    if (checked.has(idx)) {
      checked.delete(idx);
      card.classList.remove("checked");
      card.setAttribute("aria-checked", "false");
    } else {
      checked.add(idx);
      card.classList.add("checked");
      card.setAttribute("aria-checked", "true");
    }
    updateUI();
  }

  const trackerCount = document.getElementById("trackerCount");
  const trackerFill = document.getElementById("trackerFill");
  const trackerStatus = document.getElementById("trackerStatus");
  const resultPanel = document.getElementById("resultPanel");
  const resultEmoji = document.getElementById("resultEmoji");
  const resultTitle = document.getElementById("resultTitle");
  const resultDesc = document.getElementById("resultDesc");

  function updateUI() {
    const n = checked.size;
    const pct = (n / 50) * 100;

    trackerCount.textContent = n + " / 50";
    trackerFill.style.width = pct + "%";

    trackerFill.classList.remove("warning", "danger");
    trackerStatus.classList.remove(
      "status-safe",
      "status-warning",
      "status-danger",
    );
    resultPanel.classList.remove("warning-mode", "danger-mode");

    if (n === 0) {
      trackerStatus.textContent = "You're Safe";
      trackerStatus.classList.add("status-safe");
      resultEmoji.innerHTML = svgIcons.shield;
      resultEmoji.classList.remove("icon-flag", "icon-heart");
      resultEmoji.classList.add("icon-shield", "icon-safe");
      resultTitle.textContent = "You're In The Clear";
      resultDesc.textContent =
        "You haven't checked any signs yet. Go through the list above and tap every red flag that feels familiar.";
    } else if (n < 3) {
      trackerStatus.textContent = "Looking Okay";
      trackerStatus.classList.add("status-safe");
      resultEmoji.innerHTML = svgIcons.shield;
      resultEmoji.classList.remove("icon-flag", "icon-heart");
      resultEmoji.classList.add("icon-shield", "icon-safe");
      resultTitle.textContent = "A Few Flags. But Don't Panic";
      resultDesc.textContent =
        "You checked " +
        n +
        " sign" +
        (n > 1 ? "s" : "") +
        ". That's not great, but it doesn't necessarily mean the worst. Keep your eyes open and communicate.";
    } else if (n < 7) {
      trackerFill.classList.add("warning");
      trackerStatus.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tracker-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg> Suspicious';
      trackerStatus.classList.add("status-warning");
      resultPanel.classList.add("warning-mode");
      resultEmoji.innerHTML = svgIcons.shield;
      resultEmoji.classList.remove("icon-flag", "icon-heart");
      resultEmoji.classList.add("icon-shield", "icon-warning");
      resultTitle.textContent = "This Is Getting Suspicious";
      resultDesc.textContent =
        "You've checked " +
        n +
        " signs. According to the threshold, 3 or more means it's highly likely something is going on. It's time for a serious, honest conversation.";
    } else if (n < 15) {
      trackerFill.classList.add("danger");
      trackerStatus.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="tracker-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" /></svg> Red Alert';
      trackerStatus.classList.add("status-danger");
      resultPanel.classList.add("danger-mode");
      resultEmoji.innerHTML = svgIcons.flag;
      resultEmoji.classList.remove("icon-shield", "icon-heart");
      resultEmoji.classList.add("icon-flag", "icon-danger");
      resultTitle.textContent = "Major Red Flags Detected";
      resultDesc.textContent =
        "You've checked " +
        n +
        " signs. This is well beyond the threshold. The evidence is piling up. Trust yourself and prioritize your well-being.";
    } else {
      trackerFill.classList.add("danger");
      trackerStatus.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" class="tracker-icon"><path d="M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"/></svg> It\'s Over';
      trackerStatus.classList.add("status-danger");
      resultPanel.classList.add("danger-mode");
      resultEmoji.innerHTML = svgIcons.heart;
      resultEmoji.classList.remove("icon-shield", "icon-flag");
      resultEmoji.classList.add("icon-heart", "icon-danger");
      resultTitle.textContent = "You Already Know The Answer";
      resultDesc.textContent =
        "You've checked " +
        n +
        " out of 50 signs. At this point, the list is just confirming what your gut has been screaming. You deserve better. Know your worth.";
    }
  }

  const trackerBar = document.getElementById("trackerBar");
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 200) {
        trackerBar.classList.add("scrolled");
      } else {
        trackerBar.classList.remove("scrolled");
      }
    },
    { passive: true },
  );

  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 600) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    },
    { passive: true },
  );

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
