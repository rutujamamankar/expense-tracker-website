
import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import API from "../api";
function Home() {
  const [summary, setSummary] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  useEffect(() => {
    API.get("/expenses/summary/totals").then((res) => {
      setSummary(res.data);
    });
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 fw-bold text-center text-primary">💰 Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="p-4 mb-4 text-center">
            <h5>Total Balance</h5>
            <h2 className="text-success fw-bold">₹{summary.balance}</h2>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 mb-4 text-center">
            <h5>Total Income</h5>
            <h2 className="text-primary fw-bold">₹{summary.totalIncome}</h2>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 mb-4 text-center">
            <h5>Total Expense</h5>
            <h2 className="text-danger fw-bold">₹{summary.totalExpense}</h2>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
