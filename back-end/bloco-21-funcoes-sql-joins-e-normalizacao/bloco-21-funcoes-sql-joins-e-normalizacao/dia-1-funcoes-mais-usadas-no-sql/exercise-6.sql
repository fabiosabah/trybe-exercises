SELECT 
	JOB_ID,
	count(*) AS total
FROM hr.employees 
WHERE JOB_ID = 'IT_PROG';
