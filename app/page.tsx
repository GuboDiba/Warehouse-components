import Largebuttons from "./components/Buttons/largebuttons"
import Mediumbuttons from "./components/Buttons/mediumbuttons"
import Smallbuttons from "./components/Buttons/smallbuttons"
import Iconss from "./components/Icons"
import LargeTextInput from "./components/Textinputs/largeinput"
import SmallTextInput from "./components/Textinputs/smallinput"
import TextInputArea from "./components/Textinputs/textinput-area"
import Checkboxes from "./components/CustomInputs/checkboxes"
import Radios from "./components/CustomInputs/radios"
import Toggles from "./components/CustomInputs/toggles"

export default function Home() {
  return (
    <main>
    <Largebuttons/>
    <Mediumbuttons/>
    <Smallbuttons/>
    <Iconss/>
    <LargeTextInput/>
    <SmallTextInput/>
    <TextInputArea/>
    <Checkboxes/>
    <Radios/>
    <Toggles/>
    </main>
  )
}
