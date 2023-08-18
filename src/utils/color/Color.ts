interface Color {
  primary: string;
  secondary: string;
  tertiary: string;
  white: string;
  black: string;
  disable: string;
  text: {
    primary: string;
    secondary: string;
    inActive: string;
    active: string;
    subTitle: string;
  };
  button: {
    primary: {
      background: string;
      text: string;
    };
    secondary: {
      background: string;
      text: string;
    };
  };
  border: string;
  cardLight: string;
}

const MainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
  gray3: '#EDEEF0',
  blue1: '#0066CB',
};

const colors: Color = {
  primary: MainColors.green1,
  secondary: MainColors.dark1,
  tertiary: MainColors.blue1,
  white: 'white',
  black: 'black',
  disable: MainColors.gray3,
  text: {
    primary: MainColors.dark1,
    secondary: MainColors.gray1,
    inActive: MainColors.dark2,
    active: MainColors.green1,
    subTitle: MainColors.dark3,
  },
  button: {
    primary: {
      background: MainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: MainColors.dark1,
    },
  },
  border: MainColors.gray2,
  cardLight: MainColors.green2,
};

export {colors};
