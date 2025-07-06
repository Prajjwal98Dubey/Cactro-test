import { useState } from "react";

function App() {
  const [oneWay, setOneWay] = useState("");
  const [twoWay, setTwoWay] = useState(""); // for return ticket
  const [wantReturnTicket, setWantReturnTicket] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!oneWay.length) return alert("enter one way flight");
    if (wantReturnTicket && !twoWay.length) return alert("enter return ticket");
    let currentTime = Date.now();
    let oneWayTime = new Date(oneWay).getTime();
    if (oneWayTime <= currentTime)
      return alert("one way ticket date should be greater than today'date.");
    if (!wantReturnTicket) {
      alert(`You have booked a one-way flight on ${oneWay}.`);
      setOneWay("");
      return;
    }
    let twoWayTime = new Date(twoWay).getTime();
    if (currentTime >= twoWayTime || oneWayTime >= twoWayTime)
      return alert("return time is not valid.");

    alert(`You have booked a return flight from ${oneWay} to ${twoWay}`);
    setOneWay("");
    setTwoWay("");
    setWantReturnTicket(false);
    return;
  };

  return (
    <>
      <div className="text-4xl font-bold flex justify-center items-center py-2">
        EasyTrip
      </div>
      <div className="text-xl text-gray-400 py-1 flex justify-center items-center">
        flight booking made easy.
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-center items-center">
              <label
                htmlFor="one"
                className="text-gray-600 font-medium text-[13px]"
              >
                One Way Ticket
              </label>
              <input
                type="date"
                className="border border-gray-400 p-1 rounded-md mx-1"
                value={oneWay}
                onChange={(e) => setOneWay(e.target.value)}
              />
            </div>
            <div className="flex text-[13px] mt-1">
              <div className="text-gray-600 px-1">
                want to book return ticket
              </div>
              <div className="flex justify-center items-center py-1">
                <input
                  type="checkbox"
                  onChange={(e) => setWantReturnTicket(e.target.checked)}
                />
              </div>
            </div>
            {wantReturnTicket && (
              <div className="flex justify-center items-center">
                <label
                  htmlFor="twot"
                  className="text-gray-600 font-medium text-[13px]"
                >
                  Return Ticket
                </label>
                <input
                  type="date"
                  className="border border-gray-400 p-1 rounded-md mx-1"
                  value={twoWay}
                  onChange={(e) => setTwoWay(e.target.value)}
                />
              </div>
            )}

            <div className="flex justify-center items-center m-1">
              <button
                type="submit"
                className="text-[13px] bg-blue-500 rounded-md px-2 py-2 hover:bg-blue-600 cursor-pointer text-white"
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
