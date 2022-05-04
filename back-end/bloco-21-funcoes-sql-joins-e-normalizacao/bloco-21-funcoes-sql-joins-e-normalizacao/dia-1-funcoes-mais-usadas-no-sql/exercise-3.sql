SELECT 
	job_id, 
	AVG(salary) AS avarage_salary 
FROM hr.employees
GROUP BY JOB_ID
ORDER BY avarage_salary DESC;
