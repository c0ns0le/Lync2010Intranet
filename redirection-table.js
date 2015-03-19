// redirection-table.js

function geturl() {
    var parts = location.search.split("&"); //Number of paramaters

    var redirid = "";

    for (var i = 0; i < 3; i++) {
        redirid += parts[i].split("=")[1];
    }

    var retval = "dddd";

    switch (redirid) {
        case "103341028":  //Location dialog/What happens when I set my location?
            retval = "All/IM_and_Presence/How_to_Articles/Lync_2010_Set_Your_Location.htm"; break;

        case "103341034": //Main UI F1 (including pre-sign-in screen); Conversation window F1; Help\Communicator Help
            retval = "All/Contents/Lync_2010_FrontPage_CL.htm"; break;

        case "103341035": //Options/Status tab
            retval = "All/IM_and_Presence/How_to_Articles/Lync_2010_Set_Status_Options.htm"; break;

        case "103341036":  //Online Meeting Add-in: Options
            retval = "All/Collab_and_Conferencing/How_to_Articles/Lync_2010_Set_Options_for_Online_Meetings.htm"; break;

        case "103341038":  //Options/Personal
            retval = "All/IM_and_Presence/How_to_Articles/Lync_2010_Set_Personal_Options.htm"; break;

        case "103341040":  //Options/General
            retval = "All/IM_and_Presence/How_to_Articles/Lync_2010_Set_General_Options.htm"; break;

        case "103341041":  //Meeting invitation/First Online Meeting?
            retval = "All/Collab_and_Conferencing/How_to_Articles/Lync_2010_FirstOnlineMeeting.htm"; break;

        case "103341044":  //Options/Alerts
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Alerts_Options.htm"; break;

        case "103341045":  //Recording Manager: Help menu/Lync Recording Manager Help
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Manage_Recordings_in_Lync.htm"; break;

        case "103341046":  //Recording Manager: Publish/Save and Publish dialog/Options
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Using_Save_and_Publish_Dialogs.htm"; break;

        case "103341047":  //Lync Recording Player/Help
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Using_Lync_Recording_Player.htm"; break;

        case "103341050":  //Options/Phone Options/Learn more about setting phone options
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Phones_Options.htm"; break;

        case "103341052":  //Delegate added notification: You were added as a delegate for <user>
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Perform_as_Delegate.htm"; break;

        case "103341054":  //Options/Personal/Advanced connection settings dialog/Help
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Advanced_Phone_Options.htm"; break;

        case "103341055":  //Options/Call Forwarding/Help
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Call_Fwd_Options.htm"; break;

        case "103341057":  //Options/Call Forwarding/Learn More
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Call_Fwd_Options.htm"; break;

        case "103341059":  //Options/Call Forwarding -- change your work hours
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Change_Your_Work_Hours_in_Outlook.htm"; break;

        case "103341060":  //Options/Phone/<phone type button>/Edit Phone Number dialog box
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Edit_Phone_Number.htm"; break;

        case "103341061":  //"Meeting Readiness Page" link from First Time User Checklist Help topic (Redir 1041). 
                           //This page contains Javascript to check for SL & Meeting Client installation.
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1061"; break;

        case "103341062":  //Reach: indirect: Linked from Meeting Readiness JavaScript
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1062"; break;

        case "103341063":  //Lync Web App: First screen
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1063"; break;

        case "103341064":  //Lync Web App: Sharing plug-in installation
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1064"; break;

        case "103341069":  //Options/File Saving/Help
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_File_Saving_Options.htm"; break;

        case "103341070":  //Options/Audio Device/Learn More - Audio Quality FAQ
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_FAQ_About_Audio.htm"; break;

        case "103341071":  //Options/Ringtones and Sounds
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Ringtones_Sounds.htm"; break;

        case "103341072":  //Options/Audio Device
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Audio_Device_Settings.htm"; break;

        case "103341073":  //Options/Video Device
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Video_Options.htm"; break;

        case "103341074":  //Options/Phone/Advanced (Phone Integration dialog box)
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Advanced_Phone_Options.htm"; break;

        case "103341075":  //Options/Video Device/Learn More
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Video_Options.htm"; break;

        case "103341076":  //Contact card/F1
            retval = "All/IM_and_Presence/How_to_Articles/Lync_2010_Use_Contact_Card.htm"; break;

        case "103341077":  //Conversation window: Settings/Recording Options
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Set_Lync_Recording_Options.htm"; break;

        case "103341078":  //Conversation window/[hang up audio]/Actions/Start Recording
                           //“Your audio is not currently being recorded”/Learn More
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Recording_and_Playback_CL.htm"; break;

        case "103341079":  //Options/My Picture
            retval = "All/IM_and_Presence/How_to_Articles/Lync_2010_Set_Picture_Options.htm"; break;

        case "103341080":  //Response group added notification: You were added as an agent for <response group>
            retval = "All/Interoperability/How_to_Articles/Lync_2010_RGS_Calls.htm"; break;

        case "103341081":  //Your recording is automatically saved to your computer in Lync recording format: Learn More
            retval = "All/Voice_and_Video/How_to_Articles/Lync_2010_Recording_and_Playback_CL.htm"; break;

        //Errors and Troubleshooting messages begin here

        case "103341082":  //Sharing: Some people in meeting are not viewing what you are sharing
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1082"; break;

        case "103341085":  //Voice Quality Notification: Your computer is causing poor audio quality
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1085"; break;

        case "103341086":  //Voice Quality Notification: Your microphone is capturing too much noise
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1086"; break;

        case "103341087":  //Voice Quality Notification: You may be speaking too close to the microphone
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1087"; break;

        case "103341088":  //Voice Quality Notification: Your audio device may cause echo for others
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1088"; break;

        case "103341089":  //Voice Quality Notification: Half duplex mode (Your device is causing poor audio quality)
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1089"; break;

        case "103341090":  //Voice Quality Notification: Multiple device events (Your device is causing poor audio quality)
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1090"; break;

        case "103341091":  //Voice Quality Notification: Your microphone is not working
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1091"; break;

        case "103341092":  //Voice Quality Notification: Your speaker is not working
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1092"; break;

        case "103341093":  //Voice Quality Notification: Your speaker and microphone are not working
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1093"; break;

        case "103341094":  //Voice Quality Notification: Your speaker is muted
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1094"; break;

        case "103341095":  //Voice Quality Notification: Your speaker volume is low
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1095"; break;

        case "103341096":  //Voice Quality Notification: Multiple audio devices in the same room 
                           //may cause audio quality issues
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1096"; break;

        case "103341097":  //Voice Quality Notification: Three bars during audio or video call 
                           //(Network connectivity is good) 
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1097"; break;

        case "103341098":  //Voice Quality Notification: Two bars or One Bar for audio call 
                           //(Network connectivity is causing audio quality issues)
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1098"; break;

        case "103341099":  //Voice Quality Notification: Two bars or One Bar for video call 
                           //(Network connectivity is causing video quality issues) 
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1099"; break;

        case "103341100":  //Voice Quality Notification: One bar due to network delays 
                           //(Network connectivity might be causing audio delays)
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1100"; break;

        case "103341101":  //Voice Quality Notification: Low CPU cycles available 
                           //(Your computer is running slowly and is affecting audio quality) 
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1101"; break;

        case "103341102":  //Voice Quality Notification: Remote_Party is using a device that might be causing echo
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1102"; break;

        case "103341103":  //Voice Quality Notification: Remote party is using a device that is causing poor audio quality
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1103"; break;

        case "103341104":  //Voice Quality Notification: TTY mode is turned on and might cause audio issues
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1104"; break;

        case "103341105":  //Voice Quality Notification: TTY notification in a P2P call (TTY mode is turned on) 
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1105"; break;

        case "103341106":  //Voice Quality Notification: TTY option on Tools > Options > Phones > Accessibility 
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1106"; break;

        case "103341107":  //Sharing: Don’t see the program you want to share?
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1107"; break;

        case "103341992":  //Options/My Picture/Not sure how to get a web address for a picture or need more help?
            retval = "http://r.office.microsoft.com/r/rlidOC10?clid=1033&p1=4&p2=1992"; break;

        /* The retval = "URL-name" should be changed by deployment admin to point to the actual 
        location of the home page of the Lync Help site */ 
        default:
            retval = "http://ucua-08-vm005/LyncHelp/default.aspx";
    }

    return retval;
}

window.navigate(geturl());
