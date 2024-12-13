function Result({ result, BMI }) {
  return (
    <>
      {result && (
        <table
          border="1"
          style={{
            borderCollapse: "collapse",
            border:"2px solid black",
            width: "50%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderRight: "2px solid black",
                  borderBottom: "2px solid black", 
                }}
              >
                BMI
              </th>
              <th
                style={{
                  borderBottom: "2px solid black"
                }}
              >
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  borderRight: "2px solid black", 
                }}
              >
                {BMI}
              </td>
              <td>{result}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default Result;
