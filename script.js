function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return React.createElement("header", null, `Hello React! It is ${time}`);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
