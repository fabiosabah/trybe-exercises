SELECT
	department_id,
	AVG(SALARY),
   	 COUNT(*) AS `count`
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING `count` > 10;
