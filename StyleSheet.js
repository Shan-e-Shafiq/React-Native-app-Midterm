import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'relative'
  },
  GraphicImage: {
    position: 'absolute',
    left: 140,
    top: -35,
  },
  GraphicImageReflected: {
    position: 'absolute',
    transform: [{ rotate: '-90deg' }],
    left: 'none',
    right: 150,
    top: -20
  },
  LoginPageContainer: {
    width: 320,
    padding: 15,
    marginTop: 200,
  },
  inputContainer: {
    backgroundColor: 'white',
    elevation: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginBottom: 20
  },
  LoginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    gap: 5,
  },
  AnimatedGifContainer: {
    alignItems: 'center',
    marginTop: 165,
  },
  GetStartedBtnContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 25
  },
  GetStartedBtn: {
    // #C1AD8F', '#FFC85D'
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: '#C1AD8F',
    flexDirection: 'row',
    gap: 10
  },
  BookItemContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 10,
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },

  Controls: {
    width: '100%',
    // borderWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5


  },
});

export default styles