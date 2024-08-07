import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CountryLanguageSearch = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const countries = [
    { label: 'Afghanistan', value: 'af' },
    { label: 'Albania', value: 'al' },
    { label: 'Algeria', value: 'dz' },
    { label: 'Andorra', value: 'ad' },
    { label: 'Angola', value: 'ao' },
    { label: 'Antigua and Barbuda', value: 'ag' },
    { label: 'Argentina', value: 'ar' },
    { label: 'Armenia', value: 'am' },
    { label: 'Australia', value: 'au' },
    { label: 'Austria', value: 'at' },
    { label: 'Azerbaijan', value: 'az' },
    { label: 'Bahamas', value: 'bs' },
    { label: 'Bahrain', value: 'bh' },
    { label: 'Bangladesh', value: 'bd' },
    { label: 'Barbados', value: 'bb' },
    { label: 'Belarus', value: 'by' },
    { label: 'Belgium', value: 'be' },
    { label: 'Belize', value: 'bz' },
    { label: 'Benin', value: 'bj' },
    { label: 'Bhutan', value: 'bt' },
    { label: 'Bolivia', value: 'bo' },
    { label: 'Bosnia and Herzegovina', value: 'ba' },
    { label: 'Botswana', value: 'bw' },
    { label: 'Brazil', value: 'br' },
    { label: 'Brunei', value: 'bn' },
    { label: 'Bulgaria', value: 'bg' },
    { label: 'Burkina Faso', value: 'bf' },
    { label: 'Burundi', value: 'bi' },
    { label: 'Cabo Verde', value: 'cv' },
    { label: 'Cambodia', value: 'kh' },
    { label: 'Cameroon', value: 'cm' },
    { label: 'Canada', value: 'ca' },
    { label: 'Central African Republic', value: 'cf' },
    { label: 'Chad', value: 'td' },
    { label: 'Chile', value: 'cl' },
    { label: 'China', value: 'cn' },
    { label: 'Colombia', value: 'co' },
    { label: 'Comoros', value: 'km' },
    { label: 'Congo, Democratic Republic of the', value: 'cd' },
    { label: 'Congo, Republic of the', value: 'cg' },
    { label: 'Costa Rica', value: 'cr' },
    { label: "Côte d'Ivoire", value: 'ci' },
    { label: 'Croatia', value: 'hr' },
    { label: 'Cuba', value: 'cu' },
    { label: 'Cyprus', value: 'cy' },
    { label: 'Czech Republic', value: 'cz' },
    { label: 'Denmark', value: 'dk' },
    { label: 'Djibouti', value: 'dj' },
    { label: 'Dominica', value: 'dm' },
    { label: 'Dominican Republic', value: 'do' },
    { label: 'Ecuador', value: 'ec' },
    { label: 'Egypt', value: 'eg' },
    { label: 'El Salvador', value: 'sv' },
    { label: 'Equatorial Guinea', value: 'gq' },
    { label: 'Eritrea', value: 'er' },
    { label: 'Estonia', value: 'ee' },
    { label: 'Eswatini', value: 'sz' },
    { label: 'Ethiopia', value: 'et' },
    { label: 'Fiji', value: 'fj' },
    { label: 'Finland', value: 'fi' },
    { label: 'France', value: 'fr' },
    { label: 'Gabon', value: 'ga' },
    { label: 'Gambia', value: 'gm' },
    { label: 'Georgia', value: 'ge' },
    { label: 'Germany', value: 'de' },
    { label: 'Ghana', value: 'gh' },
    { label: 'Greece', value: 'gr' },
    { label: 'Grenada', value: 'gd' },
    { label: 'Guatemala', value: 'gt' },
    { label: 'Guinea', value: 'gn' },
    { label: 'Guinea-Bissau', value: 'gw' },
    { label: 'Guyana', value: 'gy' },
    { label: 'Haiti', value: 'ht' },
    { label: 'Honduras', value: 'hn' },
    { label: 'Hungary', value: 'hu' },
    { label: 'Iceland', value: 'is' },
    { label: 'India', value: 'in' },
    { label: 'Indonesia', value: 'id' },
    { label: 'Iran', value: 'ir' },
    { label: 'Iraq', value: 'iq' },
    { label: 'Ireland', value: 'ie' },
    { label: 'Israel', value: 'il' },
    { label: 'Italy', value: 'it' },
    { label: 'Jamaica', value: 'jm' },
    { label: 'Japan', value: 'jp' },
    { label: 'Jordan', value: 'jo' },
    { label: 'Kazakhstan', value: 'kz' },
    { label: 'Kenya', value: 'ke' },
    { label: 'Kiribati', value: 'ki' },
    { label: 'Kuwait', value: 'kw' },
    { label: 'Kyrgyzstan', value: 'kg' },
    { label: 'Laos', value: 'la' },
    { label: 'Latvia', value: 'lv' },
    { label: 'Lebanon', value: 'lb' },
    { label: 'Lesotho', value: 'ls' },
    { label: 'Liberia', value: 'lr' },
    { label: 'Libya', value: 'ly' },
    { label: 'Liechtenstein', value: 'li' },
    { label: 'Lithuania', value: 'lt' },
    { label: 'Luxembourg', value: 'lu' },
    { label: 'Madagascar', value: 'mg' },
    { label: 'Malawi', value: 'mw' },
    { label: 'Malaysia', value: 'my' },
    { label: 'Maldives', value: 'mv' },
    { label: 'Mali', value: 'ml' },
    { label: 'Malta', value: 'mt' },
    { label: 'Marshall Islands', value: 'mh' },
    { label: 'Mauritania', value: 'mr' },
    { label: 'Mauritius', value: 'mu' },
    { label: 'Mexico', value: 'mx' },
    { label: 'Micronesia', value: 'fm' },
    { label: 'Moldova', value: 'md' },
    { label: 'Monaco', value: 'mc' },
    { label: 'Mongolia', value: 'mn' },
    { label: 'Montenegro', value: 'me' },
    { label: 'Morocco', value: 'ma' },
    { label: 'Mozambique', value: 'mz' },
    { label: 'Myanmar', value: 'mm' },
    { label: 'Namibia', value: 'na' },
    { label: 'Nauru', value: 'nr' },
    { label: 'Nepal', value: 'np' },
    { label: 'Netherlands', value: 'nl' },
    { label: 'New Zealand', value: 'nz' },
    { label: 'Nicaragua', value: 'ni' },
    { label: 'Niger', value: 'ne' },
    { label: 'Nigeria', value: 'ng' },
    { label: 'North Korea', value: 'kp' },
    { label: 'North Macedonia', value: 'mk' },
    { label: 'Norway', value: 'no' },
    { label: 'Oman', value: 'om' },
    { label: 'Pakistan', value: 'pk' },
    { label: 'Palau', value: 'pw' },
    { label: 'Palestine', value: 'ps' },
    { label: 'Panama', value: 'pa' },
    { label: 'Papua New Guinea', value: 'pg' },
    { label: 'Paraguay', value: 'py' },
    { label: 'Peru', value: 'pe' },
    { label: 'Philippines', value: 'ph' },
    { label: 'Poland', value: 'pl' },
    { label: 'Portugal', value: 'pt' },
    { label: 'Qatar', value: 'qa' },
    { label: 'Romania', value: 'ro' },
    { label: 'Russia', value: 'ru' },
    { label: 'Rwanda', value: 'rw' },
    { label: 'Saint Kitts and Nevis', value: 'kn' },
    { label: 'Saint Lucia', value: 'lc' },
    { label: 'Saint Vincent and the Grenadines', value: 'vc' },
    { label: 'Samoa', value: 'ws' },
    { label: 'San Marino', value: 'sm' },
    { label: 'Sao Tome and Principe', value: 'st' },
    { label: 'Saudi Arabia', value: 'sa' },
    { label: 'Senegal', value: 'sn' },
    { label: 'Serbia', value: 'rs' },
    { label: 'Seychelles', value: 'sc' },
    { label: 'Sierra Leone', value: 'sl' },
    { label: 'Singapore', value: 'sg' },
    { label: 'Slovakia', value: 'sk' },
    { label: 'Slovenia', value: 'si' },
    { label: 'Solomon Islands', value: 'sb' },
    { label: 'Somalia', value: 'so' },
    { label: 'South Africa', value: 'za' },
    { label: 'South Korea', value: 'kr' },
    { label: 'South Sudan', value: 'ss' },
    { label: 'Spain', value: 'es' },
    { label: 'Sri Lanka', value: 'lk' },
    { label: 'Sudan', value: 'sd' },
    { label: 'Suriname', value: 'sr' },
    { label: 'Sweden', value: 'se' },
    { label: 'Switzerland', value: 'ch' },
    { label: 'Syria', value: 'sy' },
    { label: 'Taiwan', value: 'tw' },
    { label: 'Tajikistan', value: 'tj' },
    { label: 'Tanzania', value: 'tz' },
    { label: 'Thailand', value: 'th' },
    { label: 'Timor-Leste', value: 'tl' },
    { label: 'Togo', value: 'tg' },
    { label: 'Tonga', value: 'to' },
    { label: 'Trinidad and Tobago', value: 'tt' },
    { label: 'Tunisia', value: 'tn' },
    { label: 'Turkey', value: 'tr' },
    { label: 'Turkmenistan', value: 'tm' },
    { label: 'Tuvalu', value: 'tv' },
    { label: 'Uganda', value: 'ug' },
    { label: 'Ukraine', value: 'ua' },
    { label: 'United Arab Emirates', value: 'ae' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'United States', value: 'us' },
    { label: 'Uruguay', value: 'uy' },
    { label: 'Uzbekistan', value: 'uz' },
    { label: 'Vanuatu', value: 'vu' },
    { label: 'Vatican City', value: 'va' },
    { label: 'Venezuela', value: 've' },
    { label: 'Vietnam', value: 'vn' },
    { label: 'Yemen', value: 'ye' },
    { label: 'Zambia', value: 'zm' },
    { label: 'Zimbabwe', value: 'zw' },
  ];
  

  const languages = [
    { label: 'English (United State of America)', value: 'en' },
    { label: 'English (United Kingdom)', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'Dari, Pashto (Afghanistan)', value: 'af' },
    { label: 'Albanian (Albania)', value: 'al' },
    { label: 'Arabic, Berber (Algeria)', value: 'dz' },
    { label: 'Catalan (Andorra)', value: 'ad' },
    { label: 'Kongo, Portuguese (Angola)', value: 'ao' },
    { label: 'English (Antigua and Barbuda)', value: 'ag' },
    { label: 'Spanish (Argentina)', value: 'ar' },
    { label: 'Armenian (Armenia)', value: 'am' },
    { label: 'English (Australia)', value: 'au' },
    { label: 'German (Austria)', value: 'at' },
    { label: 'Azerbaijani (Azerbaijan)', value: 'az' },
    { label: 'English (The Bahamas)', value: 'bs' },
    { label: 'Arabic (Bahrain)', value: 'bh' },
    { label: 'Bengali (Bangladesh)', value: 'bd' },
    { label: 'English (Barbados)', value: 'bb' },
    { label: 'Belarusian (Belarus)', value: 'by' },
    { label: 'Dutch, French, German (Belgium)', value: 'be' },
    { label: 'English (Belize)', value: 'bz' },
    { label: 'French (Benin)', value: 'bj' },
    { label: 'Dzongkha (Bhutan)', value: 'bt' },
    { label: 'Aymara, Guaraní, Quechua, Spanish (Bolivia)', value: 'bo' },
    { label: 'Bosnian, Serbian, Croatian (Bosnia and Herzegovina)', value: 'ba' },
    { label: 'English, Tswana (Botswana)', value: 'bw' },
    { label: 'Portuguese (Brazil)', value: 'br' },
    { label: 'Malay (Brunei)', value: 'bn' },
    { label: 'Bulgarian (Bulgaria)', value: 'bg' },
    { label: 'French (Burkina Faso)', value: 'bf' },
    { label: 'French, Kirundi (Burundi)', value: 'bi' },
    { label: 'Khmer (Cambodia)', value: 'kh' },
    { label: 'English, French (Cameroon)', value: 'cm' },
    { label: 'English, French (Canada)', value: 'ca' },
    { label: 'Portuguese (Cape Verde)', value: 'cv' },
    { label: 'French, Sango (Central African Republic)', value: 'cf' },
    { "label": "French, Arabic (Chad)", "value": "td" },
     { "label": "Spanish (Chile)", "value": "cl" },
        { "label": "Mandarin (China)", "value": "cn" },
        { "label": "Spanish (Colombia)", "value": "co" },
        { "label": "French (Comoros)", "value": "km" },
        { "label": "French (Congo, Democratic Republic of the)", "value": "cd" },
        { "label": "French (Congo, Republic of the)", "value": "cg" },
        { "label": "Spanish (Costa Rica)", "value": "cr" },
        { "label": "Spanish (Cuba)", "value": "cu" },
        { "label": "Greek (Cyprus)", "value": "cy" },
        { "label": "Czech (Czech Republic)", "value": "cz" },
        { "label": "Danish (Denmark)", "value": "dk" },
        { "label": "French (Djibouti)", "value": "dj" },
        { "label": "Dutch (Netherlands)", "value": "nl" },
        { "label": "English (Dominica)", "value": "dm" },
        { "label": "Spanish (Dominican Republic)", "value": "do" },
        { "label": "Spanish (Ecuador)", "value": "ec" },
        { "label": "Arabic (Egypt)", "value": "eg" },
        { "label": "Spanish (El Salvador)", "value": "sv" },
        { "label": "Spanish (Equatorial Guinea)", "value": "gq" },
        { "label": "Tigrinya, Arabic (Eritrea)", "value": "er" },
        { "label": "Estonian (Estonia)", "value": "ee" },
        { "label": "Swazi, English (Eswatini)", "value": "sz" },
        { "label": "Amharic (Ethiopia)", "value": "et" },
        { "label": "Fijian (Fiji)", "value": "fj" },
        { "label": "Finnish (Finland)", "value": "fi" },
        { "label": "French (France)", "value": "fr" },
        { "label": "French (Gabon)", "value": "ga" },
        { "label": "English (Gambia)", "value": "gm" },
        { "label": "Georgian (Georgia)", "value": "ge" },
        { "label": "German (Germany)", "value": "de" },
        { "label": "English (Ghana)", "value": "gh" },
        { "label": "Greek (Greece)", "value": "gr" },
        { "label": "English (Grenada)", "value": "gd" },
        { "label": "Spanish (Guatemala)", "value": "gt" },
        { "label": "French (Guinea)", "value": "gn" },
        { "label": "Portuguese (Guinea-Bissau)", "value": "gw" },
        { "label": "English (Guyana)", "value": "gy" },
        { "label": "Spanish (Haiti)", "value": "ht" },
        { "label": "Spanish (Honduras)", "value": "hn" },
        { "label": "Hungarian (Hungary)", "value": "hu" },
        { "label": "Icelandic (Iceland)", "value": "is" },
        { "label": "Hindi, English (India)", "value": "in" },
        { "label": "Indonesian (Indonesia)", "value": "id" },
        { "label": "Persian (Iran)", "value": "ir" },
        { "label": "Arabic, Kurdish (Iraq)", "value": "iq" },
        { "label": "Irish, English (Ireland)", "value": "ie" },
        { "label": "Hebrew (Israel)", "value": "il" },
        { "label": "Italian (Italy)", "value": "it" },
        { "label": "Jamaican Creole English (Jamaica)", "value": "jm" },
        { "label": "Japanese (Japan)", "value": "jp" },
        { "label": "Arabic (Jordan)", "value": "jo" },
        { "label": "Kazakh (Kazakhstan)", "value": "kz" },
        { "label": "Swahili, English (Kenya)", "value": "ke" },
        { "label": "Kiribati (Kiribati)", "value": "ki" },
        { "label": "Korean (North Korea)", "value": "kp" },
        { "label": "Korean (South Korea)", "value": "kr" },
        { "label": "Arabic (Kuwait)", "value": "kw" },
        { "label": "Kyrgyz (Kyrgyzstan)", "value": "kg" },
        { "label": "Lao (Laos)", "value": "la" },
        { "label": "Latvian (Latvia)", "value": "lv" },
        { "label": "Arabic (Lebanon)", "value": "lb" },
        { "label": "Sotho, English (Lesotho)", "value": "ls" },
        { "label": "English (Liberia)", "value": "lr" },
        { "label": "Arabic (Libya)", "value": "ly" },
        { "label": "Lithuanian (Lithuania)", "value": "lt" },
        { "label": "French (Luxembourg)", "value": "lu" },
        { "label": "Macedonian (North Macedonia)", "value": "mk" },
        { "label": "Malagasy (Madagascar)", "value": "mg" },
        { "label": "Chichewa (Malawi)", "value": "mw" },
        { "label": "Malay (Malaysia)", "value": "my" },
        { "label": "Maldivian (Maldives)", "value": "mv" },
        { "label": "French (Mali)", "value": "ml" },
        { "label": "Maltese (Malta)", "value": "mt" },
        { "label": "Marshallese (Marshall Islands)", "value": "mh" },
        { "label": "French (Mauritania)", "value": "mr" },
        { "label": "English (Mauritius)", "value": "mu" },
        { "label": "Spanish (Mexico)", "value": "mx" },
        { "label": "Micronesian (Micronesia)", "value": "fm" },
        { "label": "Moldovan (Moldova)", "value": "md" },
        { "label": "Mongolian (Mongolia)", "value": "mn" },
        { "label": "Montenegrin (Montenegro)", "value": "me" },
        { "label": "Moroccan Arabic (Morocco)", "value": "ma" },
        { "label": "Portuguese (Mozambique)", "value": "mz" },
        { "label": "Burmese (Myanmar)", "value": "mm" },
        { "label": "English (Namibia)", "value": "na" },
        { "label": "Nauruan (Nauru)", "value": "nr" },
        { "label": "Nepali (Nepal)", "value": "np" },
        { "label": "Dutch (Netherlands)", "value": "nl" },
        { "label": "English (New Zealand)", "value": "nz" },
        { "label": "Spanish (Nicaragua)", "value": "ni" },
        { "label": "French (Niger)", "value": "ne" },
        { "label": "English (Nigeria)", "value": "ng" },
        { "label": "Norwegian (Norway)", "value": "no" },
        { "label": "Arabic (Oman)", "value": "om" },
        { "label": "Urdu, English (Pakistan)", "value": "pk" },
        { "label": "Palauan (Palau)", "value": "pw" },
        { "label": "English (Palestine)", "value": "ps" },
        { "label": "Spanish (Panama)", "value": "pa" },
        { "label": "English (Papua New Guinea)", "value": "pg" },
        { "label": "Guarani, Spanish (Paraguay)", "value": "py" },
        { "label": "Spanish (Peru)", "value": "pe" },
        { "label": "Filipino, English (Philippines)", "value": "ph" },
        { "label": "Polish (Poland)", "value": "pl" },
        { "label": "Portuguese (Portugal)", "value": "pt" },
        { "label": "Arabic (Qatar)", "value": "qa" },
        
    
   
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Country & Language</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Country</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedCountry(value)}
            items={countries}
            placeholder={{ label: '', value: null }}
            style={pickerSelectStyles}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Language</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedLanguage(value)}
            items={languages}
            placeholder={{ label: '', value: null }}
            style={pickerSelectStyles}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#005f80',
    padding: 60,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    marginVertical: 20,
    width: '80%',
    bottom: 150,
  
  },
  pickerLabel: {
    fontSize: 18,
    color: '#005f80',
    marginBottom: 10,
    
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    color: '#005f80',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 4,
    color: '#005f80',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default CountryLanguageSearch;
