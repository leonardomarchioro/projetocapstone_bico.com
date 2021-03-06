import { createContext, useContext, useState } from "react";

const AvatarsContext = createContext();

const initialState = [
  {
    avatarId: 1,
    avatarConfig: {
      bgColor: "#506AF4",
      earSize: "big",
      eyeBrowStyle: "up",
      eyeStyle: "circle",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#FC909F",
      hairStyle: "normal",
      hatColor: "#506AF4",
      hatStyle: "none",
      mouthStyle: "peace",
      noseStyle: "long",
      sex: "woman",
      shirtColor: "#77311D",
      shirtStyle: "polo",
    },
  },
  {
    avatarId: 2,
    avatarConfig: {
      bgColor: "#74D153",
      earSize: "big",
      eyeBrowStyle: "up",
      eyeStyle: "oval",
      faceColor: "#AC6651",
      glassesStyle: "square",
      hairColor: "#FC909F",
      hairStyle: "womanShort",
      hatColor: "#77311D",
      hatStyle: "turban",
      mouthStyle: "laugh",
      noseStyle: "short",
      sex: "woman",
      shirtColor: "#6BD9E9",
      shirtStyle: "short",
    },
  },
  {
    avatarId: 3,
    avatarConfig: {
      bgColor: "#FFEDEF",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "oval",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatColor: "#FC909F",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "round",
      sex: "man",
      shirtColor: "#9287FF",
      shirtStyle: "polo",
    },
  },
  {
    avatarId: 4,
    avatarConfig: {
      bgColor: "#F48150",
      earSize: "big",
      eyeBrowStyle: "up",
      eyeStyle: "smile",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "normal",
      hatColor: "#F48150",
      hatStyle: "none",
      mouthStyle: "laugh",
      noseStyle: "round",
      sex: "man",
      shirtColor: "#77311D",
      shirtStyle: "hoody",
    },
  },
  {
    avatarId: 5,
    avatarConfig: {
      bgColor: "#506AF4",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "oval",
      faceColor: "#AC6651",
      glassesStyle: "square",
      hairColor: "#FC909F",
      hairStyle: "normal",
      hatColor: "#fff",
      hatStyle: "none",
      mouthStyle: "laugh",
      noseStyle: "short",
      sex: "man",
      shirtColor: "#F4D150",
      shirtStyle: "short",
    },
  },
  {
    avatarId: 6,
    avatarConfig: {
      bgColor: "#D2EFF3",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "circle",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#506AF4",
      hairStyle: "normal",
      hatColor: "#F48150",
      hatStyle: "none",
      mouthStyle: "peace",
      noseStyle: "short",
      sex: "woman",
      shirtColor: "#6BD9E9",
      shirtStyle: "polo",
    },
  },
  {
    avatarId: 7,
    avatarConfig: {
      bgColor: "#506AF4",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "smile",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#D2EFF3",
      hairStyle: "normal",
      hatColor: "#F48150",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "short",
      sex: "man",
      shirtColor: "#F4D150",
      shirtStyle: "hoody",
    },
  },
  {
    avatarId: 8,
    avatarConfig: {
      bgColor: "#D2EFF3",
      earSize: "big",
      eyeBrowStyle: "up",
      eyeStyle: "circle",
      faceColor: "#F9C9B6",
      glassesStyle: "none",
      hairColor: "#fff",
      hairStyle: "normal",
      hatColor: "#D2EFF3",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "long",
      sex: "man",
      shirtColor: "#77311D",
      shirtStyle: "polo",
    },
  },
  {
    avatarId: 9,
    avatarConfig: {
      bgColor: "#D2EFF3",
      earSize: "big",
      eyeBrowStyle: "upWoman",
      eyeStyle: "circle",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "womanShort",
      hatColor: "#F48150",
      hatStyle: "none",
      mouthStyle: "peace",
      noseStyle: "long",
      sex: "woman",
      shirtColor: "#9287FF",
      shirtStyle: "hoody",
    },
  },
  {
    avatarId: 10,
    avatarConfig: {
      bgColor: "#F48150",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "oval",
      faceColor: "#AC6651",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatColor: "#FC909F",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "long",
      sex: "man",
      shirtColor: "#77311D",
      shirtStyle: "polo",
    },
  },
  {
    avatarId: 11,
    avatarConfig: {
      bgColor: "#E0DDFF",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "circle",
      faceColor: "#F9C9B6",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatColor: "#000",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "short",
      sex: "man",
      shirtColor: "#6BD9E9",
      shirtStyle: "short",
    },
  },
  {
    avatarId: 12,
    avatarConfig: {
      bgColor: "#FFEDEF",
      earSize: "big",
      eyeBrowStyle: "up",
      eyeStyle: "smile",
      faceColor: "#F9C9B6",
      glassesStyle: "none",
      hairColor: "#506AF4",
      hairStyle: "normal",
      hatColor: "#000",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "round",
      sex: "man",
      shirtColor: "#9287FF",
      shirtStyle: "short",
    },
  },
  {
    avatarId: 13,
    avatarConfig: {
      bgColor: "#E0DDFF",
      earSize: "big",
      eyeBrowStyle: "upWoman",
      eyeStyle: "smile",
      faceColor: "#F9C9B6",
      glassesStyle: "none",
      hairColor: "#506AF4",
      hairStyle: "womanLong",
      hatColor: "#D2EFF3",
      hatStyle: "none",
      mouthStyle: "smile",
      noseStyle: "short",
      sex: "woman",
      shirtColor: "#FC909F",
      shirtStyle: "short",
    },
  },
  {
    avatarId: 14,
    avatarConfig: {
      bgColor: "#F4D150",
      earSize: "small",
      eyeBrowStyle: "upWoman",
      eyeStyle: "circle",
      faceColor: "#F9C9B6",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "womanShort",
      hatColor: "#FC909F",
      hatStyle: "none",
      mouthStyle: "peace",
      noseStyle: "long",
      sex: "woman",
      shirtColor: "#9287FF",
      shirtStyle: "polo",
    },
  },
  {
    avatarId: 15,
    avatarConfig: {
      bgColor: "#FC909F",
      earSize: "small",
      eyeBrowStyle: "up",
      eyeStyle: "smile",
      faceColor: "#F9C9B6",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatColor: "#000",
      hatStyle: "none",
      mouthStyle: "peace",
      noseStyle: "round",
      sex: "man",
      shirtColor: "#77311D",
      shirtStyle: "hoody",
    },
  },
];

export const ProviderAvatars = ({ children }) => {
  const [avatars] = useState(initialState);
  const getRandomAvatar = () =>
    avatars[Math.floor(Math.random() * avatars.length)];
  return (
    <AvatarsContext.Provider value={{ avatars, getRandomAvatar }}>
      {children}
    </AvatarsContext.Provider>
  );
};

export const useAvatars = () => useContext(AvatarsContext);
