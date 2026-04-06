1. **`attendance` 테이블은 중복된 데이터가 쌓이는 구조이다. 중복된 데이터는 어떤 컬럼인가?**
   
   - crew_id, nickname
   
2. **`attendance` 테이블에서 중복을 제거하기 위해 `crew` 테이블을 만들려고 한다. 어떻게 구성해 볼 수 있을까?**

   - crew_id와 nickname을 컬럼으로 가지는 테이블을 만들고, attendance 테이블에서는 nickname 컬럼을 제거한다.
   - 그 후에 crew_id로 join을 하여 두 테이블을 연결하면 중복을 제거할 수 있다.
   
3. **`crew` 테이블에 들어가야 할 크루들의 정보는 어떻게 추출할까? (hint: DISTINCT)**

  ```MySQL
  SELECT DISTINCT crew_id, nickname FROM attendace;
  ```
   
4. **최종적으로 crew 테이블 생성:**

  ``` MYSQL
  CREATE TABLE crew (
    crew_id INT NOT NULL AUTO_INCREMENT,
    nickname VARCHAR(50) NOT NULL,
    PRIMARY KEY (crew_id)
  );
  ```

5. adfadfadfa

   adfadf
