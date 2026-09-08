import { useEffect } from "react";

const PETS = [
  {
    id: "oneko-cat",
    scriptId: "oneko-cat-script",
    sprite: "/oneko.gif",
    offsetX: -56,
  },
  {
    id: "oneko-dog",
    scriptId: "oneko-dog-script",
    sprite: "/onedog.png",
    offsetX: 56,
  },
] as const;

export function CursorPets() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      || window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    PETS.forEach((pet) => {
      document.getElementById(pet.id)?.remove();
      document.getElementById(pet.scriptId)?.remove();

      const script = document.createElement("script");
      script.id = pet.scriptId;
      script.src = "/oneko.js";
      script.async = false;
      script.dataset.petId = pet.id;
      script.dataset.sprite = pet.sprite;
      script.dataset.offsetX = String(pet.offsetX);
      script.dataset.followGap = "18";
      script.dataset.persistPosition = "false";
      document.body.appendChild(script);
    });

    return () => {
      PETS.forEach((pet) => {
        document.getElementById(pet.id)?.remove();
        document.getElementById(pet.scriptId)?.remove();
      });
    };
  }, []);

  return null;
}
