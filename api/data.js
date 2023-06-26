import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
    try {
      // Vytvoření instance GoogleSpreadsheet s ID tabulky
      const doc = new GoogleSpreadsheet('balmy-vertex-391010');
  
      // Přihlášení k Google účtu (zde byste měla mít nastavené přístupové údaje)
      await doc.useServiceAccountAuth({
        client_email: 'monika@balmy-vertex-391010.iam.gserviceaccount.com',
        private_key: '\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCGzPl+e+BQJENQ\nSnNHRsjx5QmxkFbMqrz+PmqTIPEhi59f+YqWp8D0dWStNKkvwowrU+q1hJMp/rvy\nI6yku383ZCzqvT8dSgVWFKgSGokrpeJJkfMYxr85TwzoDeYkMR3GZIkOVyi/riFS\nQ0oF5N6wPmbqHwxZPdHmm0GMoywLVoliCTo2IBEkLNdRLvPQ4UygRMDt7gHlb7pQ\nhKFgZXmRn54ZqHF4gp9LEu0+zaBjDa2+wTM4m1NVZ1ODN9nhvbWw4H3iT4+H60q4\n2QSZg1Q7lHwhZJb9ePyUW3Q8dFUC031wIg+98ZtsZJz7PrwqOQzIeWOKUD2+3WAP\n6uNHEVKtAgMBAAECggEABup16RcClM9XeMNpE1YUBye2DfBsKPH1jPcM0WGWSB9O\nskYuOw5+PXcsZB/Yh5pr8JPMmJAlsLjgpvVM7TgFYy/Lh3uQGmOVedYeIqz5LqPD\nGVKDQ1knBGdZhSpOuA/2XsWtARmtqIU5hmvssfgNCMPFf0DP3wrnPZ/nhrH0bNxq\nU5QuZ89khDuIEpFHT/rG1ea8WEGz4Ek9aeSz7bpTD9CjLFXzQWL//TWfsPjFrrLD\n518S8ppnMrMGH5tTjvJfaow88IXaE+iilX8Z5mZn+rvAe7hkh6HpLG9UyMnMIQL/\n3kIcxogsQvB+iojg3PqoknOHzyroXy1FtXMiXHVOgQKBgQC54vO2RwwdqCZgTnpM\nHAAzcKrkU2oYbAwFMvF0FdQ/2Udjs/q8Ye/rJY1P+N8ro5ARHouBry1AaEtYGqyx\nQTcJ5+t+U0XkkrnZtZyz5n3GX8+BK30Uqf8HPo6Xrk36Y/5yJS+GGKI6FWCmiG8J\n2D57Ls1WIIRTF9WFfdytkPyUzQKBgQC5pTc4WvR0vnBf23FVTlctLxNIUECLpevQ\nSVhcijl0b9vycv5ERwCkpjlU/6WEZYNAPDEm1rVUF5pB0CHzB+Aa5rPQESw9QwCT\nCT/DEhGhkUbNxmdmtir+N4kBmY0yYjEHCOmGhprsqcUwT5QTbpEaAVAb7YLCEI8i\nNjhaisi1YQKBgDkzbHmP3VuW7dA+9gVLrIgnyH6gaIqBXSWQapqlSP4o134H2UV1\nAcYjdRvB4rLkDyYldxp+FHe4YE8JTlDxV4V115K0/1H6ELS83S7C47tSqmD+R+w+\n75qEFo74dUhy0s6/QKOMGweyol48p6ao43k2irtRIEcNk4gTlf/XGNKVAoGBAJFJ\nDEstW2zV8SoDmdFyCuWQlt2b+LeRdVg/Xkil4EsQk6hNeFJE4ur4L5wmqglQTISD\n1s+XbrdN9WoWEcuZ2TgUXpqyJdYXzqZDscPfKy8ve6Lk591JKaJkIfO/kPHiSI5B\n2khupWYbgvfI/5CpkiMw7dm9afyoauwSVM3/GQ5hAoGBAKNTMglJKbeKQvoE5LFr\nYbZW5Nk0Lo4do+Kxptuz74DS6jhwXFHRzhHbc4D4OKtry6mGY8MafgtJT+Ts/Syl\nemb9v57swDlPfS01xqFo4Zjfri5JTTYtegOmW6RqTkTg79+wATMg+JBwGepC3ES+\nFvzav6NcdiyDoXaCy5x8+/N4\n-----END PRIVATE KEY-----\n',

      });
  
      // Načtení obsahu tabulky
      await doc.loadInfo();
  
    
      const sheet = doc.sheetsByIndex[0];
  
        // Zde můžete provést další operace s listem/tabulkou, např. získání dat
      const rows = await sheet.getRows();

        // Výpis načtených dat do konzole, pak smazat
    console.log(rows);

        // Získání dat z Google tabulek
        const data = await getDataFromGoogleSheets();

        // Transformace dat do požadovaného formátu
        const transformedData = transformData(data);

        // Výpis transformovaných dat do konzole, pak smazat
    console.log(transformedData);
  
      // Odeslání odpovědi s daty na požadavek
      res.status(200).json({ data: transformedData });
    } catch (error) {
      // Ošetření chyby a odeslání chybové odpovědi
      console.error('Chyba při zpracování požadavku:', error);
      res.status(500).json({ error: 'Chyba při zpracování požadavku' });
    }
  }
  

function transformData(data) {

    const transformedData = data.map(item => ({
        startovní_číslo: item.STARTOVNÍ_ČÍSLO,
        jméno: item.JMÉNO,
        příjmení: item.PŘÍJMENÍ,
        vykoupení: item.Vykoupení,

      }));
      
    return transformedData;
  }
  
