import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    margin: "50px"
  }
});

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>THIS IS ASH-UI DOCUMENTATION</h1>
      <p>
        Lorem ipsum dolor sit amet, eum id malis tantas numquam, ei mea dicit
        tollit. Vim id aperiri alterum scaevola, munere qualisque pri in. Qui
        dolorem nominavi ei, eu omnesque cotidieque per. Sint vitae quo at,
        accusata gubergren has ex. Soluta senserit eos at. Mei tempor ridens
        necessitatibus ne. Id graeco salutatus laboramus mea, an vel errem
        denique appareat. Mucius cetero consulatu cu est. Id quod utamur sed,
        sit errem impetus invidunt an. No eum quando vocibus volumus, ancillae
        pericula tincidunt cu his. Vix at utamur perpetua, tollit blandit
        placerat qui ex. Exerci tractatos voluptatum mea te. Has ad facilis
        lucilius interpretaris, quo ei vidit dolorum definitiones, no pri homero
        quaestio honestatis. Mea ut habeo interpretaris, eos cu virtute aliquam
        meliore. Sit veniam sensibus ne, mea ridens postea contentiones cu.
        Impetus theophrastus in mel, debet verear mediocrem has ea. Prima
        prompta ei sit, ea mei natum saepe saperet. Nostro audiam philosophia ne
        eos, ut mea viris facete feugiat, usu esse solum mnesarchum in. Debitis
        reprehendunt ut mea. Id eros platonem molestiae eam, dissentias
        intellegebat cu vim. Pro everti mnesarchum ex, ad duo soleat maiorum
        evertitur. Fugit dictas viderer vix ne. Debitis assentior sed ea. Ea
        illud antiopam eam.
      </p>
    </div>
  );
}

export default Home;
