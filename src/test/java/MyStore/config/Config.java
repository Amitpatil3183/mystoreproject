package MyStore.config;

import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

public class Config {

	
	public static Collection<String> listofsuite=null;
	public static String imagefolder="D:\\Screenshots";
	public static String getImageFilePath()
	{
		SimpleDateFormat formatter = new SimpleDateFormat("dd_MM_yyyy_HH_mm_ss");  
	    Date date = new Date();  
	    String imagename=formatter.format(date).toString();
	    return imagefolder+"\\"+imagename+".png";
	}
	
	public static String getImageFilePathForPrompts()
	{
		SimpleDateFormat formatter = new SimpleDateFormat("dd_MM_yyyy_HH_mm_ss");  
	    Date date = new Date();  
	    String imagename=formatter.format(date).toString();
	    return imagefolder+"\\"+"p"+imagename+".png";
	}
}
