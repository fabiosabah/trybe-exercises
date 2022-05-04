SELECT 
	JOB_ID,
	AVG(salary) AS avarage_salary
FROM hr.employees
GROUP BY JOB_ID
HAVING  JOB_ID <> 'IT_PROG'
ORDER BY avarage_salary DESC;