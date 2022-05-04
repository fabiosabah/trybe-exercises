SELECT 
	JOB_ID,
	SUM(salary)
FROM hr.employees
GROUP BY JOB_ID;
