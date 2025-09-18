import { Container, Row, Col, Card } from "react-bootstrap";
import { Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, LineElement, CategoryScale, LinearScale, PointElement);

function Summary() {
  const pieData = {
    labels: ["Food", "Transport", "Shopping", "Bills"],
    datasets: [
      {
        data: [300, 150, 200, 100],
        backgroundColor: ["#6f42c1", "#0d6efd", "#dc3545", "#198754"],
        borderWidth: 3,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Expenses",
        data: [400, 600, 800, 500, 700],
        borderColor: "#6f42c1",
        backgroundColor: "rgba(111, 66, 193, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold text-center text-primary">📊 Summary</h2>
      <Row>
        <Col md={6}>
          <Card className="p-4 mb-4">
            <h5 className="text-center">Expense Breakdown</h5>
            <Pie data={pieData} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4 mb-4">
            <h5 className="text-center">Monthly Trend</h5>
            <Line data={lineData} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Summary;
