(function () {
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('#site-nav a[href*="#"]')
  );
  var targets = [];

  function normalizePath(path) {
    return path.replace(/\/index\.html$/, "/").replace(/\/$/, "/") || "/";
  }

  navLinks.forEach(function (link) {
    var url = new URL(link.getAttribute("href"), window.location.href);
    var targetPath = normalizePath(url.pathname);
    var currentPath = normalizePath(window.location.pathname);
    var isHomeAnchor = targetPath === "/" || targetPath === currentPath;
    var id = decodeURIComponent(url.hash.replace("#", ""));
    var target = id && document.getElementById(id);

    if (isHomeAnchor && target) {
      targets.push({ id: id, link: link, target: target });
    }
  });

  if (!targets.length) {
    return;
  }

  var activeId = "";
  var masthead = document.querySelector(".masthead");

  function setActive(id) {
    if (activeId === id) {
      return;
    }

    activeId = id;
    targets.forEach(function (item) {
      var isActive = item.id === id;
      var navItem = item.link.closest(".masthead__menu-item");

      if (navItem) {
        navItem.classList.toggle("is-active", isActive);
      }

      if (isActive) {
        item.link.setAttribute("aria-current", "true");
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  }

  function getHashTarget() {
    var id = decodeURIComponent(window.location.hash.replace("#", ""));

    if (!id) {
      return null;
    }

    for (var index = 0; index < targets.length; index += 1) {
      if (targets[index].id === id) {
        return targets[index];
      }
    }

    return null;
  }

  function updateActiveFromHash() {
    var current = getHashTarget();

    if (current) {
      setActive(current.id);
    }
  }

  function updateActiveSection() {
    var offset = (masthead ? masthead.offsetHeight : 70) + 48;
    var current = targets[0];

    targets.forEach(function (item) {
      if (item.target.getBoundingClientRect().top <= offset) {
        current = item;
      }
    });

    setActive(current.id);
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveSection();
      ticking = false;
    });
  });

  window.addEventListener("resize", updateActiveSection);
  window.addEventListener("hashchange", updateActiveFromHash);
  window.addEventListener("load", function () {
    if (window.location.hash) {
      updateActiveFromHash();
    } else {
      updateActiveSection();
    }
  });

  if (window.location.hash) {
    updateActiveFromHash();
  } else {
    updateActiveSection();
  }
})();
