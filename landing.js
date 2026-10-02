(function () {
  // English lives in the HTML (so the page reads fine without JS); this is the Polish copy,
  // keyed by data-i18n. Mockup strings follow the app's own pl.json wording.
  var pl = {
    "nav.how": "Jak to działa",
    "nav.features": "Funkcje",
    "nav.privacy": "Prywatność",
    "nav.get": "Pobierz",

    "hero.title": "Parking, którym<br><span class=\"gradient-text\">dzielą się sąsiedzi.</span>",
    "hero.lead": "Udostępnij swoje miejsce, gdy Cię nie ma. Zarezerwuj miejsce sąsiada, gdy go potrzebujesz. Parking Spot Share pozwala mieszkańcom osiedla udostępniać sobie nawzajem miejsca, aby brak parkingu dla gości przestał być problemem.",
    "hero.note": "Na iPhone’a i Androida · po polsku i angielsku",
    "store.appleSmall": "Pobierz w",
    "store.googleSmall": "Pobierz z",

    "problem.eyebrow": "Problem",
    "problem.title": "W dzień puste miejsca.<br>Wieczorem brak miejsca.",
    "problem.lead": "W większości garaży każde miejsce należy do jednego mieszkańca — i stoi puste, gdy ten jest w pracy, w podróży albo nie ma samochodu. W tym samym czasie jego sąsiedzi krążą wokół osiedla.",
    "garage.title": "Jeden dzień, trzy miejsca w tym samym garażu",
    "garage.without": "Bez Parking Spot Share",
    "garage.with": "Z Parking Spot Share",
    "garage.a": "Miejsce A12",
    "garage.aWho": "Anna jeździ do pracy",
    "garage.b": "Miejsce B04",
    "garage.bWho": "Piotra nie ma cały tydzień",
    "garage.c": "Miejsce C21",
    "garage.cWho": "Ewa nie ma samochodu",
    "garage.anna": "Anna",
    "garage.neighbour": "Sąsiad",
    "garage.guest": "Gość z 4C",
    "garage.second": "Drugie auto",
    "garage.lOwner": "Parkuje właściciel",
    "garage.lShared": "Zarezerwowane przez sąsiada",
    "garage.lIdle": "Stoi puste",
    "garage.hours": "z 72 godzin miejsc parkingowych stoi pustych",

    "how.eyebrow": "Jak to działa",
    "how.title": "Gotowe w trzech krokach.",
    "how.lead": "Parking Spot Share działa osobno dla każdego osiedla. Dołączyć mogą tylko mieszkańcy Twojego budynku, więc zawsze dzielisz się z sąsiadami.",
    "how.s1t": "Zdobądź kod dostępu",
    "how.s1p": "Każde osiedle ma własny kod. Poproś o niego administratora osiedla — bez kodu nikt nie dołączy.",
    "how.s2t": "Załóż konto",
    "how.s2p": "Wpisz kod, a następnie bezpiecznie zarejestruj się przez Microsoft. Parking Spot Share nigdy nie widzi Twojego hasła.",
    "how.s3t": "Dodaj swoje miejsce parkingowe",
    "how.s3p": "Jeśli masz miejsce parkingowe, dodaj je, aby móc udostępniać je sąsiadom — maksymalnie trzy. To wszystko.",

    "share.eyebrow": "Udostępnij miejsce",
    "share.title": "Nie ma Cię cały dzień? Niech Twoje miejsce się przyda.",
    "share.lead": "Wybierz godziny, w których go nie potrzebujesz, dodaj notatkę i opublikuj. Sąsiedzi od razu zobaczą ofertę.",
    "share.t1": "Kilka godzin albo cały tydzień — Ty decydujesz",
    "share.t2": "Notatki, np. „zadaszone, blisko windy”",
    "share.t3": "Edytuj lub anuluj w każdej chwili, zanim ktoś zarezerwuje",

    "book.eyebrow": "Zarezerwuj miejsce",
    "book.title": "Rezerwuj tylko te godziny, których potrzebujesz.",
    "book.lead": "Przeglądaj miejsca udostępniane przez sąsiadów na najbliższe 24 godziny, 3 dni, tydzień lub wybrane daty. Zarezerwuj całą ofertę albo tylko jej część — reszta pozostaje dostępna dla innych.",
    "split.offer": "Oferta Anny",
    "split.you": "Rezerwujesz",
    "split.result": "Wynik",
    "split.open": "Wolne",
    "split.yours": "Twoje",
    "split.stillOpen": "Wolne dla innych",

    "req.eyebrow": "Poproś o miejsce",
    "req.title": "Potrzebujesz miejsca parkingowego?",
    "req.lead": "Dodaj zapytanie na potrzebny czas. Każdy na Twoim osiedlu, kto ma miejsce parkingowe, dostanie powiadomienie push. Gdy ktoś je zaakceptuje, rezerwacja utworzy się automatycznie.",
    "flow.1t": "Dodajesz zapytanie",
    "flow.1s": "Jutro, 09:00–17:00",
    "flow.2t": "Sąsiedzi dostają powiadomienie",
    "flow.2s": "Wszyscy z miejscem parkingowym",
    "flow.3t": "Ktoś akceptuje",
    "flow.3s": "przy użyciu swojego miejsca",
    "flow.4t": "Masz rezerwację",
    "flow.4s": "i powiadomienie — bez wymiany wiadomości",
    "req.note": "Jeśli na ten czas są już dostępne oferty, Parking Spot Share wskaże Ci je — dzięki temu nikt nie dostaje zbędnych powiadomień.",

    "manage.eyebrow": "Wszystko pod kontrolą",
    "manage.title": "Twoje rezerwacje i miejsca w jednym miejscu.",
    "manage.lead": "Zobacz zarezerwowane miejsca wraz z numerem miejsca oraz wszystko, co dzieje się z Twoimi: otwarte oferty i kto je zarezerwował. Zmiana planów? Anuluj albo zakończ rezerwację wcześniej, a właściciel dowie się, że miejsce jest wolne.",
    "manage.t1": "Aktualne, nadchodzące i historia z ostatnich 30 dni",
    "manage.t2": "Zakończ wcześniej jednym dotknięciem — właściciel dostanie powiadomienie",
    "manage.t3": "Odrzuć rezerwację na swoje miejsce, gdy coś się zmieni",

    "more.eyebrow": "I to nie wszystko",
    "more.title": "Drobiazgi, które robią różnicę.",
    "more.1t": "Osiedle w pigułce",
    "more.1p": "Ekran główny pokazuje, ile ofert i zapytań jest teraz aktywnych oraz ilu sąsiadów już dołączyło.",
    "more.2t": "Powiadomienia, które mają znaczenie",
    "more.2p": "Dowiesz się, gdy sąsiad potrzebuje miejsca, gdy ktoś zaakceptuje Twoje zapytanie i gdy miejsce zwolni się wcześniej.",
    "more.3t": "Po polsku i angielsku",
    "more.3p": "Korzystaj z aplikacji w swoim języku i zmieniaj go w każdej chwili w Ustawieniach. Powiadomienia też dostosują się do Twojego wyboru.",
    "more.4t": "Do trzech miejsc",
    "more.4p": "Masz lub wynajmujesz więcej niż jedno miejsce? Dodaj do trzech i udostępniaj każde według własnego planu.",
    "more.5t": "Elastyczne zakresy czasu",
    "more.5p": "Szukaj ofert na najbliższe 24 godziny, 3 dni lub tydzień albo wybierz dokładne daty i godziny.",
    "more.6t": "Zawsze do edycji",
    "more.6p": "Zmieniaj godziny lub notatkę oferty, dopóki ktoś jej nie zarezerwuje, i aktualizuj swoje miejsca, kiedy chcesz.",

    "priv.eyebrow": "Prywatność",
    "priv.title": "Stworzone dla sąsiadów.<br>Prywatne od podstaw.",
    "priv.lead": "Parking Spot Share pokazuje innym mieszkańcom tylko to, co jest potrzebne, by podzielić się z Tobą miejscem parkingowym — nic więcej.",
    "who.what": "Co",
    "who.c1": "Mieszkańcy Twojego osiedla",
    "who.c2": "Sąsiad, który udostępnił Ci swoje miejsce",
    "who.c3": "Wszyscy inni",
    "who.r1": "Twoje imię",
    "who.r1s": "przy Twoich ofertach, zapytaniach i rezerwacjach",
    "who.r2": "Numer mieszkania",
    "who.r2s": "aby mógł się z Tobą skontaktować w sprawie auta na jego miejscu",
    "who.r3": "E-mail i hasło",
    "who.r3s": "hasło obsługuje wyłącznie Microsoft",
    "priv.1t": "Tylko dla zaproszonych",
    "priv.1p": "Każde osiedle jest chronione kodem dostępu. Oferty i zapytania widzą wyłącznie jego mieszkańcy.",
    "priv.2t": "Nie przechowujemy haseł",
    "priv.2p": "Logowanie obsługuje Microsoft Entra. Parking Spot Share otrzymuje jedynie token potwierdzający Twoją tożsamość.",
    "priv.3t": "Bez reklam i śledzenia",
    "priv.3p": "Bez reklam, zewnętrznej analityki i śledzenia lokalizacji. Twoje dane nigdy nie są sprzedawane.",
    "priv.4t": "Usuń w każdej chwili",
    "priv.4p": "Samodzielnie usuń konto i wszystkie swoje dane bezpośrednio w Ustawieniach.",
    "priv.link": "Przeczytaj Politykę prywatności",

    "cta.title": "Gotowy, by się dzielić?",
    "cta.lead": "Poproś administratora osiedla o kod dostępu, pobierz Parking Spot Share i dodaj swoje miejsce. Sąsiedzi będą wdzięczni.",

    "footer.privacy": "Polityka prywatności",
    "footer.contact": "Kontakt",
    "footer.copy": "&copy; 2026 Parking Spot Share. Wszelkie prawa zastrzeżone.",

    // Phone mockups
    "m.greet": "Cześć, Kasia",
    "m.commNow": "Teraz na Twoim osiedlu",
    "m.activeOffers": "Aktywne oferty",
    "m.activeRequests": "Aktywne zapytania",
    "m.residents": "Zarejestrowani użytkownicy osiedla",
    "m.actions": "Co chcesz zrobić?",
    "m.reqTitle": "Wyślij zapytanie o miejsce parkingowe",
    "m.reqDesc": "Wszyscy zarejestrowani użytkownicy osiedla zostaną powiadomieni o zapytaniu.",
    "m.offerTitle": "Dodaj ofertę",
    "m.offerDesc": "Zaproponuj swoje miejsce parkingowe w określonych godzinach.",
    "m.tabHome": "Strona główna",
    "m.tabOffers": "Oferty parkingowe",
    "m.tabBookings": "Moje rezerwacje i parking",
    "m.tabRequests": "Zapytania",
    "m.next10": "Najbliższe 10",
    "m.next24": "Następne 24h",
    "m.next3": "Następne 3 dni",
    "m.week": "Następny tydzień",
    "m.spotA12": "Poziom -1 · Miejsce A12",
    "m.spotB04": "Poziom -2 · Miejsce B04",
    "m.spotC21": "Poziom -1 · Miejsce C21",
    "m.today0820": "Dziś 08:00–20:00",
    "m.todayFri": "Dziś 07:00 – pt. 22:00",
    "m.tonight": "Dziś 19:00 – jutro 07:00",
    "m.noteCovered": "Zadaszone, blisko windy",
    "m.noteAway": "Wyjazd do piątku",
    "m.book": "Zarezerwuj",
    "m.booked": "Zarezerwowane",
    "m.postOfferTitle": "Dodaj ofertę udostępnienia",
    "m.parkingSpace": "Miejsce parkingowe",
    "m.from": "Od",
    "m.to": "Do",
    "m.today0800": "Dziś, 08:00",
    "m.today2000": "Dziś, 20:00",
    "m.today1000": "Dziś, 10:00",
    "m.today1400": "Dziś, 14:00",
    "m.notesOpt": "Uwagi (opcjonalnie)",
    "m.postOffer": "Dodaj ofertę",
    "m.bookSpot": "Zarezerwuj miejsce",
    "m.available": "Dostępne: dziś 08:00–20:00",
    "m.confirm": "Potwierdź rezerwację",
    "m.lockDate": "czwartek, 2 października",
    "m.now": "teraz",
    "m.notifTitle": "Nowe zapytanie o miejsce",
    "m.notifBody": "Tomek potrzebuje miejsca jutro, 09:00–17:00.",
    "m.ago": "2 godz. temu",
    "m.notifOld": "Marta zakończyła rezerwację wcześniej — Twoje miejsce jest znów wolne.",
    "m.bookedByMe": "Zarezerwowane przeze mnie",
    "m.mySpaces": "Moje miejsca parkingowe",
    "m.current": "Aktualne i nadchodzące",
    "m.inProgress": "W trakcie",
    "m.today1014": "Dziś 10:00–14:00",
    "m.ownedAnna": "Właściciel: Anna",
    "m.endEarly": "Zakończ wcześniej",
    "m.confirmed": "Potwierdzone",
    "m.sat": "sob. 09:00–18:00",
    "m.ownedPiotr": "Właściciel: Piotr",
    "m.history": "Historia (ostatnie 30 dni)",
    "m.completed": "Zakończone",
    "m.sep28": "28 wrz 18:00 – 29 wrz 08:00"
  };

  var titles = {
    en: "Parking Spot Share — parking, shared between neighbours",
    pl: "Parking Spot Share — parking, którym dzielą się sąsiedzi"
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var en = nodes.map(function (el) { return el.innerHTML; });
  var buttons = document.querySelectorAll("[data-set-lang]");

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.title = titles[lang];
    nodes.forEach(function (el, i) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = lang === "pl" && pl[key] != null ? pl[key] : en[i];
    });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.getAttribute("data-set-lang");
      try { localStorage.setItem("lang", lang); } catch (e) {}
      applyLang(lang);
    });
  });

  applyLang(document.documentElement.lang === "pl" ? "pl" : "en");

  // ── Garage diagram: compare a day without and with Parking Spot Share ──
  var garage = document.querySelector(".garage");
  var hoursEl = garage.querySelector("[data-hours]");
  var modeButtons = garage.querySelectorAll(".seg button");
  var emptyHours = { without: 58, "with": 23 };
  var touched = false;

  function setMode(mode) {
    garage.setAttribute("data-mode", mode);
    hoursEl.textContent = emptyHours[mode];
    modeButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-mode") === mode));
    });
  }

  modeButtons.forEach(function (b) {
    b.addEventListener("click", function () {
      touched = true;
      setMode(b.getAttribute("data-mode"));
    });
  });

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Scroll reveal, plus playing the garage comparison once when it comes into view ──
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
        if (e.target === garage && !reduceMotion) {
          setTimeout(function () { if (!touched) setMode("with"); }, 1400);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
