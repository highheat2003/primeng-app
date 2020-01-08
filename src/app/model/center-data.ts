/**
 * 센터
 */
export class Center {
  constructor( public id = 0, public centerCd = '', public centerNm = '') {}
}

/**
 * 센터별 관리지역
 */
export class MngArea {
  constructor( public id = 0, public centerCd = '', public areaCd = '', public areaNm = '') {}
}
