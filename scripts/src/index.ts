console.log("main");
//import initchbox from './initcheckbox';
import initAddMyItem from './initAddMyItem';
import initWeather from './initWeather';
import initPlace from './initPlace';
import saveList from './saveList';

function main() {
    initAddMyItem();
    initWeather();
    initPlace();
    saveList();
}
main();