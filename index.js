/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import { playbackService } from './Musicapp/musicPlayerServices';

// import App from './currency/App';
// import AppPro from './components/AppPro';
import AppPlus from './Musicapp/AppPlus';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => AppPlus);
TrackPlayer.registerPlaybackService(() => playbackService);
