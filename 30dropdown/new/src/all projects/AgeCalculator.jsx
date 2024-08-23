import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '',
      ageResult: '',
    };
  }

  handleDateChange = (e) => {
    this.setState({ birthDate: e.target.value });
  };

  calculateAge = () => {
    const { birthDate } = this.state;
    const birth = new Date(birthDate);

    const d1 = birth.getDate();
    const m1 = birth.getMonth() + 1;
    const y1 = birth.getFullYear();

    const today = new Date();
    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = this.getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
      m3 = 11;
      y3--;
    }

    this.setState({
      ageResult: `You are ${y3} years, ${m3} month${m3 > 1 ? 's' : ''}, and ${d3} day${d3 > 1 ? 's' : ''} old.`,
    });
  };

  getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  render() {
    const { birthDate, ageResult } = this.state;
    return (
      <div style={styles.container}>
        <div style={styles.calculator}>
          <h1 style={styles.title}>
            Javascript <br /> <span style={styles.titleSpan}>Age Calculator</span>
          </h1>
          <div style={styles.inputBox}>
            <input
              type="date"
              value={birthDate}
              onChange={this.handleDateChange}
              max={new Date().toISOString().split("T")[0]}
              style={styles.input}
            />
            <button onClick={this.calculateAge} style={styles.button}>Calculate</button>
          </div>
          <p id="result">{ageResult}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #4203a9, #90bafc)',
    color: '#fff',
    padding: '10px',
  },
  calculator: {
    width: '100%',
    maxWidth: '600px',
    marginLeft: '10%',
    marginTop: '10%',
  },
  title: {
    fontSize: '60px',
  },
  titleSpan: {
    color: '#ffff76',
  },
  inputBox: {
    margin: '40px 0',
    padding: '35px',
    borderRadius: '10px',
    background: 'rgba(225, 225, 225, 0.3)',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: '20px',
    border: 0,
    outline: 0,
    fontSize: '18px',
    padding: '14px 20px',
  },
  button: {
    background: '#ffff76',
    border: 0,
    outline: 0,
    padding: '15px 30px',
    borderRadius: '5px',
    fontWeight: '500',
    color: '#333',
    cursor: 'pointer',
  }
};

export default AgeCalculator;
