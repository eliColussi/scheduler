export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.filter((days) => days.name === day);
  if (selectedDay.length === 0) {
    return [];
  }
  const appointments = selectedDay[0].appointments.map((id) => {
    return state.appointments[id];
  });
  return appointments;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewObj = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return interviewObj;
}

export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find((d) => d.name === day);
  if (!selectedDay || !selectedDay.interviewers) {
    return [];
  }
  const interviewers = selectedDay.interviewers.map((id) => {
    return state.interviewers[id];
  });
  return interviewers;
}