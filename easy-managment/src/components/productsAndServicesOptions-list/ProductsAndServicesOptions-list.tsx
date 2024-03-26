import LinkToContactPageBtn from "../linkToContactPageBtn/LinkToContactPageBtn";
import List from "../list/List";

const ProductsAndServicesOptionsList = () => {
  return (
    <List
      headline="מסלולים"
      id="product-types-section"
      text="בחר את הגרסה המתאימה לך ביותר"
      contentBox={[
        {
          title: "BASIC",
          listItems: [
            <li>עד 15 עובדים</li>,
            <li>ממשק נוח לשיבוץ ידני</li>,
            <li>מערך אילוצים של עובדים</li>,
            <li>פורום עובדים</li>,
            <li>ממשק מיילים</li>,
            <li>ממשק SMS</li>,
            <li>גישה לנתונים היסטורים</li>,
          ],
          link: <LinkToContactPageBtn />,
        },
        {
          title: "STANDARD",
          listItems: [
            <li>כולל את יכולות גרסת ה- BASIC</li>,
            <li>עד 75 עובדים</li>,
            <li>סידור עבודה אוטומטי</li>,
            <li>מערך אילוצים, עובדים וארגון</li>,
            <li>מתן פתרונות אונליין לבעיות איוש</li>,
            <li>אשף דוחות</li>,
            <li>חבילת תמיכה מלאה</li>,
          ],
          link: <LinkToContactPageBtn />,
        },
        {
          title: "PREMIUM",
          listItems: [
            <li>כולל את יכולות גרסת ה- STANDARD</li>,
            <li>ללא הגבלת מס עובדים</li>,
            <li>מערכת החלפות לעובדים</li>,
            <li>ממשק שאלונים ומבחנים לעובדים</li>,
            <li>מערך דוחות ייעודי</li>,
            <li>ממשק שכר</li>,
            <li>חבילת תמיכה PLATINUM</li>,
          ],
          link: <LinkToContactPageBtn />,
        },
      ]}
    />
  );
};

export default ProductsAndServicesOptionsList;
