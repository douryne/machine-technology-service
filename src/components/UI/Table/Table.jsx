import React from 'react';

import './Table.css';

export const Table = () => {
  return (
    <div className='gray-bg'>
      <div className='fof'>
        <div className='container'>
          <table border='1' width='100%' height='600px'>
            <tr id='th1'>
              <td colSpan='4'>КОНТРАКТЫ ИП ООО &quot;DAL HEАVY INDUSTRIES&quot;</td>
            </tr>
            <tr>
              <td colSpan='4' bgcolor='yellow'>
                {' '}
              </td>
            </tr>
            <tr id='th2'>
              <td>№</td>
              <td>Дата</td>
              <td>Наименование Заказчика</td>
              <td>Предмет контракта</td>
            </tr>
            <tr>
              <td>1</td>
              <td>17.08.2018</td>
              <td>ООО &quot;MITSUBISHI HEAVY INDUSTRIES&quot;</td>
              <td>
                Изготовление металлоконструкций воздуховодов, панелей для строительства &quot;Производство аммиака и
                карбомида на АО Навоиазот&quot;
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>08.11.2018</td>
              <td>AO &quot;UZBEKGIDROENERGOQURILISH&quot;</td>
              <td>
                &quot;Изготовление металлоконструкций для объекта &quot;&quot;Внедрение высоко эффективных
                когенерационных газотурбинных технологий на Ферганской ТЭЦ и Ферганской котельной РК-3.&quot;
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>09.11.2018</td>
              <td>ИП OOO &quot;METAL INVENT&quot;(ORIENT GROUP)</td>
              <td>Изготовление металлоконструкций из металлопроката для объекта &quot;Центр исламской культуры</td>
            </tr>
            <tr>
              <td>4</td>
              <td>11.12.2018</td>
              <td>ООО &quot;ТРЕСТ12&quot;(ORIENT GROUP)</td>
              <td> Изготовление металлоконструкций из металлопроката для объекта «КУКСАРОЙ» </td>
            </tr>
            <tr>
              <td>5</td>
              <td>15.12.2018</td>
              <td>&quot;DAL TEKNIK MAKINE TICARET VE SANAYI ANONIM SIRKETI&quot;(Республика Турция)</td>
              <td>Поставка металлоконструкций для Цементного Завода &quot;Зомин Цемент&quot;(Джиззакская обл.)</td>
            </tr>
            <tr>
              <td>6</td>
              <td>07.01.2019</td>
              <td>ООО &quot;ENTER ENGINEERING&quot;</td>
              <td>Изготовление и поставка закладных деталей из металлопроката</td>
            </tr>
            <tr>
              <td>7</td>
              <td>16.01.2019</td>
              <td>ИП OOO &quot;METAL INVENT&quot;(ORIENT GROUP)</td>
              <td>
                Разработка X STEEL и изготовление металлоконструкций из металлопроката для объекта &quot;Центр Исламской
                культуры&quot;(Изготовления Купола)
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>08.02.2019</td>
              <td>ООО &quot;AVION SYSTEMS&quot;(AKFA GROUP)</td>
              <td>Изготовление стальных полок из металлопроката </td>
            </tr>
            <tr>
              <td>9</td>
              <td>13.02.2019</td>
              <td>CП ООО &quot;HIGN LAND CITY&quot;(AKFA GROUP)</td>
              <td>
                Изготовления металлоконструкций из металлопроката для солнцезащитного навеса, шахт лифта и пентхауса
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>23.02.2019</td>
              <td>CП ООО &quot;HIGN LAND CITY&quot;(AKFA GROUP)</td>
              <td>Изготовление несущей системы для фасада из металлопроката </td>
            </tr>
            <tr>
              <td>11</td>
              <td>18.03.2019</td>
              <td>CП ООО &quot;HIGN LAND CITY&quot;(AKFA GROUP)</td>
              <td>Изготовление металлоконструкций из металлопроката для детского сада и навеса (для пейзажа) </td>
            </tr>
            <tr>
              <td>12</td>
              <td>01.04.2019</td>
              <td>ООО &quot;FERRUM CONSTRUCTIONS&quot;</td>
              <td>Изготовление металлоконструкций из металлопроката </td>
            </tr>
            <tr>
              <td>13</td>
              <td>23.04.2019</td>
              <td>ООО &quot;GREEN LINE PROFIL&quot; (BENKAM)</td>
              <td>
                Изготовление металлоконструкций из металлопроката и выполнение монтажных работ для объекта
                &quot;Организация производства алюминовых профилей и изделий из алюминия на территории СЭЗ НАВОИ&quot;
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>24.04.2019</td>
              <td>CП ООО &quot;HIGN LAND CITY&quot;(AKFA GROUP)</td>
              <td>
                Изготовление металлоконструкций из металлопроката для шахт лифта, крыши, арки блоков и дополнительные
                металлоконструкции крыши
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>29.04.2019</td>
              <td>OOO &quot;NAMANGAN-ISTIKLOL BOGI&quot;</td>
              <td>
                {' '}
                Проектирование металлоконструкций 16000 м2 территории и монтаж анкерных изделий аквапарка «Afsonalar
                Vodiysi» который будет построен в г. Намангане
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>29.04.2019</td>
              <td>ООО “Innovation Tashkent Building Materials Industry”</td>
              <td>
                Поставка металлоконструкций и ограждения включая расходные материалы и соответствующие чертежи и
                документы для объекта &quot;ЕВРОСЕМЕНТ&quot;
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>08.05.2019</td>
              <td>АО &quot;UZBEKGIDROENERGOQURILISH&quot;</td>
              <td>
                Изготовление из металлоконструкций панелных воздуховодов для объекта&quot;Внедрение высокоэффективных
                когеренационных газотурбинных технологии на Ферганской ТЭЦ и Ферганской котельный РК-3
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>16.05.2019</td>
              <td>ООО &quot;DISCOVER INVEST&quot; (TASHKENT CITY LOT 8)</td>
              <td>
                Поставка металлопроката, анкерных болтов и уголков из нержавеющей стали в рамках проекта Ташкент Сити
                LOT8
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>23.05.2019</td>
              <td>СП ООО &quot;STARGATE SYSTEMS&quot;(AKFA GROUP)</td>
              <td>
                Изготовление металлоконструкций из металлопроката для здания кинотеатра, для крепости и для аквариума,
                FEC и амфитеатра в рамках проекта THEMAPARK{' '}
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>04.07.2019</td>
              <td>ООО &quot;DISCOVER INVEST&quot; (TASHKENT CITY)</td>
              <td>
                Изготовление металлоконструкций из нержавеющего листа толщиной 3 мм и профилей из черного металла для
                бассейна, выполнение монтажных работ в рамках проекта Tashkent City LOT 8
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>11.07.2019</td>
              <td>АО &quot;Алмалыкский горно металлургический комбинат&quot;</td>
              <td>Изготовление металлоконструкций из металлопроката для Здания тех.обслуживания</td>
            </tr>
            <tr>
              <td>22</td>
              <td>01.08.2019</td>
              <td>ООО &quot;Afrosiyob Parranda&quot;</td>
              <td>Изготовление металлоконструкций из металлопроката для пллатформы пересечения ж/д дороги</td>
            </tr>
            <tr>
              <td>23</td>
              <td>05.08.2019</td>
              <td>ООО &quot;UMS&quot;(Universal Mobile Systems)</td>
              <td>Изготовление антенных опор для объектов в Узбекистане </td>
            </tr>
            <tr>
              <td>24</td>
              <td>06.08.2019</td>
              <td>ООО &quot;Trans Servis komrleks&quot; (UZGIDRO)</td>
              <td>Изготовление металлоконструкции из металлопроката для объекта 01/19-1-КМ. </td>
            </tr>
            <tr>
              <td>25</td>
              <td>20.08.2019</td>
              <td>ООО “Innovation Tashkent Building Materials Industry”</td>
              <td>
                Поставка металлоконструкций и ограждения включая расходные материалы и соответствующие чертежи и
                документы для 2-го этапа строительства объекта ЕВРОЦЕМЕНТ в городе Ахангаране
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>01.12.2019</td>
              <td>ООО &quot;ENTER ENGINEERING&quot;</td>
              <td>Изготовление металлоконструкций для Ташкентского завода по производству металлоконструкций </td>
            </tr>
            <tr>
              <td>27</td>
              <td>10.12.2019</td>
              <td>Филиал АО «YDA İNŞAAT SANAYI VE TICARET ANONIM ŞIRKETI» в г.Астана, Республика Казахстан</td>
              <td>
                Изготовление и монтаж металлоконструкций для здания терминала аэропорта в г.Туркистан Республики
                Казахстан
              </td>
            </tr>
            <tr>
              <td>28</td>
              <td>05.01.2020</td>
              <td>Компания &quot;SOFIA STROY&quot;</td>
              <td>Горизонтальные резервуары для воды объемом 100 м3 в количестве 4 шт. компании LUKOİL </td>
            </tr>
            <tr>
              <td>29</td>
              <td>30.01.2020</td>
              <td>NATIONAL PLAST (AKFA GROUP) ЗАВОД ПВХ - НАВОИ</td>
              <td>Изготовление металлоконструкций для крытого помещения площадью 11.000 m2 </td>
            </tr>
            <tr>
              <td>30</td>
              <td>10.02.2020</td>
              <td>Заказчик компания &quot;SOFYA STROY&quot;. Для компании &quot;ЛУКОЙЛ&quot;.</td>
              <td>4 емкости размером 100 м3 каждый.</td>
            </tr>
            <tr bgcolor='yellow' id='th1'>
              <td colSpan='4'> </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
