interface Color {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  text: {
    primary: string;
    secondary: string;
    inActive: string;
    active: string;
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
}

const MainColors = {
  green1: '#0BCAD4',
  dark1: '#112340',
  dark2: '#495A75',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
};

const colors: Color = {
  primary: MainColors.green1,
  secondary: MainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: MainColors.dark1,
    secondary: MainColors.gray1,
    inActive: MainColors.dark2,
    active: MainColors.green1,
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
};

export {colors};
