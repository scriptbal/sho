const originalTitle = document.title;

    const funnyTitles = [
      "Heyy Comeback :3",
      "I'm Still waiting hehee",
      "You feel confused, lets talk",
      "Special Price for You"
    ];

    let interval;

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        let i = 0;
        interval = setInterval(() => {
          document.title = funnyTitles[i % funnyTitles.length];
          i++;
        }, 1700);
      } else {
        clearInterval(interval);
        document.title = originalTitle;
      }
    });