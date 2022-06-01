<?php
class MailAttachment
{
    public $base_url;
    function __construct(string $base_url)
    {
        $this->base_url = $base_url;
    }

    public function downloadable($downloadable, $file, $_file_)
    {
        if ($downloadable === true) {
            ?>
                <div class="d-block m-0" style="margin-top: -20px !important" align="center">
                    <a href="<?= $this->base_url.$file; ?>" target="_blank"  class="fa small text-center">DOWNLOAD</a>
                </div>
            <?php
        }
    }

    public function downloadable_alt($downloadable, $file, $_file_)
    {
        if ($downloadable === true) {
            $filePath = $this->base_url.$file;
            return "
                <div class=\"d-block m-0\" style=\"margin-top: -20px !important\" align=\"center\">
                    <a href=\"{$filePath}\" target=\"_blank\"  class=\"fa small text-center\">DOWNLOAD</a>
                </div>
           ";
        }
    }

    public function images($downloadable, $file, $_file_)
    {
        $fileView = str_replace("?fn=", "files/", $file);
        ?>
            <div class="p-0 m-0" img="act" style="width: auto">
                <a img="act" href="<?= $this->base_url.$fileView; ?>" class="p-1" style="wid th: 50px">
                    <span class="d-block fa fa-file-picture-o fa-3x p-2 text-info text-center" style="wid th: 50px;text-align: center;"></span>
                    <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
                </a>
            </div>
            <?php
                $this->downloadable($downloadable, $file, $_file_);
            ?>
        <?php
    }

    public function images_alt($downloadable, $file, $_file_)
    {
        $fileView = str_replace("?fn=", "files/", $file);
        $filePath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" img=\"act\" style=\"width: auto\">
                <a img=\"act\" href=\"{$filePath}\" class=\"p-1\" style=\"\">
                    <span class=\"d-block fa fa-file-picture-o fa-3x p-2 text-info text-center\"
                    style=\"text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
    }

   public function videos($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?= $this->base_url.$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$file; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wi dth: 50px">
                   <span class="d-block fa fa-file-video-o fa-3x p-2 text-info text-center" style="wid th: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function videos_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-video-o fa-3x p-2 text-info text-center\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }

   public function audio($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?= $this->base_url.$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$file; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wi dth: 50px">
                   <span class="d-block fa fa-file-audio-o fa-3x p-2 text-info text-center" style="wid th: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function audio_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-audio-o fa-3x p-2 text-info text-center\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }
   
   public function pdf($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?= $this->base_url.$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$file; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wid th: 50px">
                   <span class="d-block fa fa-file-pdf-o fa-3x p-2 text-danger" style="wid th: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function pdf_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-pdf-o fa-3x p-2 text-danger\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }

   public function zip_rar($downloadable, $file, $_file_)
   {
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a target="_blank" href="<?= $this->base_url.$file; ?>" class="p-1" style="w idth: 50px">
                   <span class="d-block fa fa-file-archive-o fa-3x p-2 text-danger" style="wid th: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">DOWNLOAD</span>
               </a>
           </div>
       <?php
   }

   public function zip_rar_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a target=\"_blank\" href=\"{$filePath}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-archive-o fa-3x p-2 text-danger\" style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">DOWNLOAD</span>
                </a>
            </div>
        ";
   }

   public function code($downloadable, $file, $_file_)
   {
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a target="_blank" href="<?= $this->base_url.$file; ?>" class="p-1" style="w idth: 50px">
                   <span class="d-block fa fa-file-code-o fa-3x p-2 text-default" style="wid th: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">DOWNLOAD</span>
               </a>
           </div>
       <?php
   }

   public function code_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a target=\"_blank\" href=\"{$filePath}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-code-o fa-3x p-2 text-default\" style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">DOWNLOAD</span>
                </a>
            </div>
        ";
   }

   public function word_docs($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?= $this->base_url.$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$fileView; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wi dth: 50px">
                   <span class="d-block fa fa-file-word-o fa-3x p-2 text-info" style="wi dth: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function word_docs_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-word-o fa-3x p-2 text-info\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }
   
   public function excel($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?= $this->base_url.$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$fileView; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wid th: 50px">
                   <span class="d-block fa fa-file-excel-o fa-3x p-2 text-success" style="wid th: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function excel_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-excel-o fa-3x p-2 text-success\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }

   public function powerpoint($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?= $this->base_url.$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$fileView; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wid th: 50px">
                   <span class="d-block fa fa-file-powerpoint-o fa-3x p-2 orange-text" style="wi dth: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function powerpoint_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-file-powerpoint-o fa-3x p-2 orange-text\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }

   public function access($downloadable, $file, $_file_)
   {
       $fileView = str_replace("?fn=", "files/", $file);
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a href="<?=$fileView; ?>" custom_iframe="btn" custom_iframe_url="<?= $this->base_url.$fileView; ?>" custom_iframe_ext="<?= $_file_; ?>" class="p-1" style="wi dth: 50px">
                   <span class="d-block fa fa-wpforms fa-3x p-2 orange-text" style="wi dth: 50px;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">VIEW</span>
               </a>
           </div>
           <?php
               $this->downloadable($downloadable, $file, $_file_);
           ?>
       <?php
   }

   public function access_alt($downloadable, $file, $_file_)
   {
        $filePath = $this->base_url.$file;
        $fileView = str_replace("?fn=", "files/", $file);
        $fileViewPath = $this->base_url.$fileView;
        $downloadable = $this->downloadable_alt($downloadable, $file, $_file_);
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
                <a href=\"{$fileViewPath}\" custom_iframe=\"btn\" 
                    custom_iframe_url=\"{$filePath}\" custom_iframe_ext=\"{$_file_}\" class=\"p-1\">
                    <span class=\"d-block fa fa-wpforms fa-3x p-2 orange-text\"
                    style=\"wid th: 50px;text-align: center;\"></span>
                    <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">VIEW</span>
                </a>
            </div>{$downloadable}
        ";
   }

   public function unknown_files($downloadable, $file, $_file_)
   {
       ?>
           <div class="p-0 m-0" style="width: auto">
               <a target="_blank" href="<?= $this->base_url.$file; ?>" class="p-1" style="wi dth: 50px">
                   <span class="d-block fa fa-file-o fa-3x p-2" style="wi dth: 50px; font-weight: bold;text-align: center;"></span>
                   <span class="d-block small fa text-center" style=" white-space: nowrap;">DOWNLOAD</span>
               </a>
           </div>
       <?php
   }

    public function unknown_files_alt($downloadable, $file, $_file_)
    {
        $filePath = $this->base_url.$file;
        return "
            <div class=\"p-0 m-0\" style=\"width: auto\">
               <a target=\"_blank\" href=\"{$filePath}\" class=\"p-1\" style=\"wi dth: 50px\">
                   <span class=\"d-block fa fa-file-o fa-3x p-2\" style=\"wi dth: 50px; font-weight: bold;text-align: center;\"></span>
                   <span class=\"d-block small fa text-center\" style=\" white-space: nowrap;\">DOWNLOAD</span>
               </a>
           </div>
        ";
    }

    public function html1($where=0)
    {
        if ($where === 1) {
            // Top
            ?>
                <div class="d-block" align="center"> <div class="row">
            <?php                
        } else {
            // Bottom
            ?>
                </div> </div>
            <?php 
        }
    }

    public function html1_alt($where=0)
    {
        if ($where === 1) {
            // Top
            return "<div class=\"d-block\" align=\"center\"> <div class=\"row\">";            
        } else {
            // Bottom
            return "</div> </div>";
        }
    }

    public function html2($col, $width, $where=0)
    {
        if ($where === 1) {
            // Top
            ?>
                <div class="<?= $col; ?> p-2 my-1" style="width: <?= $width; ?>"> <div class="card">
            <?php                
        } else {
            // Bottom
            ?>
                </div> </div>
            <?php 
        }
    }

    public function html2_alt($col, $width, $where=0)
    {
        if ($where === 1) {
            // Top
            return "<div class=\"{$col} p-2 my-1\" style=\"width: {$width}\"> <div class=\"card\">";             
        } else {
            // Bottom
            return "</div> </div>";
        }
    }

   public function display_downloadable($url)
   {
       return '
           <a href="'.$this->base_url.$url.'" target="_blank" download="'.$url.'"  class="fa small text-center">DOWNLOAD</a>
       ';
       return '<div class="d-block m-0" style="margin-top: -20px !important" align="center">
           <a href="'.$this->base_url.$url.'" target="_blank"  class="fa small text-center">DOWNLOAD</a>
       </div>';
   }

   public function files($FILES, $limit, $cols_width, $downloadable=false, $row=false)
   {
      $cols_width = $cols_width;
      $c_wCol = $cols_width['col'];
      $c_wWidth = $cols_width['width'];

      ($row === true) ? $this->html1(1) : "";
          foreach ($FILES as $key => $FILE) :
               $file = $FILE['pdccmc_attachment'];
               // print_r($file); 
              if ($key<=$limit) {
                  $_file_ = explode(".", $file); 
                  $_file_ = end($_file_); 
                  if ($_file_ !== ""): 
                      $this->html2($c_wCol, $c_wWidth, 1);
                          if (strtolower($_file_)==="jpg" || strtolower($_file_)==="jpeg" || strtolower($_file_)==="png" || strtolower($_file_)==="gif") : 

                              $this->images($downloadable, $file, $_file_);

                          elseif (strtolower($_file_)==="mp4" || strtolower($_file_)==="3gp") : 

                              $this->videos($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="mp3") :
                                                  
                              $this->audio($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="pdf") : 

                              $this->pdf($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="zip" || strtolower($_file_)==="rar") :
                                                  
                              $this->zip_rar($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_) === "html" || strtolower($_file_) === "xhtml" || strtolower($_file_) === "htm" || strtolower($_file_) === "css" || strtolower($_file_) === "php" || strtolower($_file_) === "rb" || strtolower($_file_) === "py" || strtolower($_file_) === "js") : 
                                                  
                              $this->code($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="doc" || strtolower($_file_)==="docx") : 

                              $this->word_docs($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="xlsx" || strtolower($_file_)==="xls") :
                                                  
                              $this->excel($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="pptx" || strtolower($_file_)==="ppt") :
                                                  
                              $this->powerpoint($downloadable, $file, $_file_);
                                                  
                          elseif (strtolower($_file_)==="accdb") :
                                                  
                              $this->access($downloadable, $file, $_file_);
                                                  
                          else : 

                              $this->unknown_files($downloadable, $file, $_file_);
                                                  
                          endif;
                      $this->html2($c_wCol, $c_wWidth);
                  endif;
              }
          endforeach;
      ($row === true) ? $this->html1() : "";
   }

    public function files_alt($FILES, $limit, $cols_width, $downloadable=false, $row=false)
    {
        $cols_width = $cols_width;
        $c_wCol = $cols_width['col'];
        $c_wWidth = $cols_width['width'];

        $top = ($row === true) ? $this->html1_alt(1) : "";
            $center = "";
            foreach ($FILES as $key => $FILE) :
                $file = $FILE['pdccmc_attachment'];
                // print_r($file); 
                if ($key <= $limit) {
                    $_file_ = explode(".", $file); 
                    $_file_ = end($_file_); 
                    if ($_file_ !== ""): 
                        $center .= $this->html2_alt($c_wCol, $c_wWidth, 1);
                            if (strtolower($_file_)==="jpg" || strtolower($_file_)==="jpeg" || strtolower($_file_)==="png" || strtolower($_file_)==="gif") : 

                                $center .= $this->images_alt($downloadable, $file, $_file_);

                            elseif (strtolower($_file_)==="mp4" || strtolower($_file_)==="3gp") : 

                                $center .= $this->videos_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="mp3") :
                                                    
                                $center .= $this->audio_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="pdf") : 

                                $center .= $this->pdf_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="zip" || strtolower($_file_)==="rar") :
                                                    
                                $center .= $this->zip_rar_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_) === "html" || strtolower($_file_) === "xhtml" || strtolower($_file_) === "htm" || strtolower($_file_) === "css" || strtolower($_file_) === "php" || strtolower($_file_) === "rb" || strtolower($_file_) === "py" || strtolower($_file_) === "js") : 
                                                    
                                $center .= $this->code_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="doc" || strtolower($_file_)==="docx") : 

                                $center .= $this->word_docs_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="xlsx" || strtolower($_file_)==="xls") :
                                                    
                                $center .= $this->excel_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="pptx" || strtolower($_file_)==="ppt") :
                                                    
                                $center .= $this->powerpoint_alt($downloadable, $file, $_file_);
                                                    
                            elseif (strtolower($_file_)==="accdb") :
                                                    
                                $center .= $this->access_alt($downloadable, $file, $_file_);
                                                    
                            else : 

                                $center .= $this->unknown_files_alt($downloadable, $file, $_file_);
                                                    
                            endif;
                            $center .= $this->html2_alt($c_wCol, $c_wWidth);
                    endif;
                }
            endforeach;
        $bottom = ($row === true) ? $this->html1_alt() : "";
        return "{$top}{$center}{$bottom}";
    }

    public function get_file_icon($filename)
    {
        $_file_ = explode(".", $filename);
        $_file_ = end($_file_);
        if (strtolower($_file_)==="jpg" || strtolower($_file_)==="jpeg"
            || strtolower($_file_)==="png" || strtolower($_file_)==="gif") {
            $fileIcon = "fa-file-picture-o";
        } elseif (strtolower($_file_)==="mp4" || strtolower($_file_)==="3gp") {
            $fileIcon = "fa-file-video-o";
        } elseif (strtolower($_file_)==="mp3") {
            $fileIcon = "fa-file-audio-o";
        } elseif (strtolower($_file_)==="pdf") {
            $fileIcon = "fa-file-pdf-o";
        } elseif (strtolower($_file_)==="zip" || strtolower($_file_)==="rar") {
            $fileIcon = "fa-file-archive-o";
        } elseif (strtolower($_file_) === "html" || strtolower($_file_) === "xhtml"
            || strtolower($_file_) === "htm" || strtolower($_file_) === "css"
            || strtolower($_file_) === "php" || strtolower($_file_) === "rb"
            || strtolower($_file_) === "py" || strtolower($_file_) === "js") {
            $fileIcon = "fa-file-code-o";
        } elseif (strtolower($_file_)==="doc" || strtolower($_file_)==="docx") {
            $fileIcon = "fa-file-word-o";
        } elseif (strtolower($_file_)==="xlsx" || strtolower($_file_)==="xls") {
            $fileIcon = "fa-file-excel-o";
        } elseif (strtolower($_file_)==="pptx" || strtolower($_file_)==="ppt") {
            $fileIcon = "fa-file-powerpoint-o";
        } elseif (strtolower($_file_)==="accdb") {
            $fileIcon = "fa-wpforms";
        } else {
            $fileIcon = "fa-file-o";
        }
        return $fileIcon;
    }

    private function display_google_iframe($url)
    {
        return '<iframe class="container" src="https://docs.google.com/gview?url=' .$this->base_url.$url. '&embedded=true" style="height: 75vh;"></iframe>';
    }

    private function display_video($url)
    {
        return '<video src="' .$this->base_url.$url. '" controls="" class="container pt-4 pb-4" style="background-color: rgba(1, 11, 33, 0.50); padding: 10px;height: 50vh;"></video>';
    }

    private function display_audio($url)
    {
        return '<audio src="' .$this->base_url.$url. '" autoplay=" " controls="" class="container" style="background-color: #215868 !important; padding: 10px;" ></audio>';
    }

    private function display_image($url)
    {
        return '<img class="shadow img-fluid shadow shadow-sm" alt="'.$url.'" src="' .$this->base_url.$url. '">';
    }

    public function display_file($filename)
    {
        $_file_ = explode(".", $filename);
        $_file_ = end($_file_);
        if (strtolower($_file_)==="jpg" || strtolower($_file_)==="jpeg"
            || strtolower($_file_)==="png" || strtolower($_file_)==="gif") {
                $fileDisplay = $this->display_image($filename);
        } elseif (strtolower($_file_)==="mp4" || strtolower($_file_)==="3gp") {
            $fileDisplay = $this->display_video($filename);
        } elseif (strtolower($_file_)==="mp3" || strtolower($_file_)==="m4a") {
            $fileDisplay = $this->display_audio($filename);
        } elseif (strtolower($_file_)==="pdf") {
            $fileDisplay = $this->display_google_iframe($filename);
        } elseif (strtolower($_file_)==="zip" || strtolower($_file_)==="rar") {
            $fileDisplay = "Unable To Display File";
        } elseif (strtolower($_file_) === "html" || strtolower($_file_) === "xhtml"
            || strtolower($_file_) === "htm" || strtolower($_file_) === "css"
            || strtolower($_file_) === "php" || strtolower($_file_) === "rb"
            || strtolower($_file_) === "py" || strtolower($_file_) === "js") {
            $fileDisplay = "Unable To Display File";
        } elseif (strtolower($_file_)==="doc" || strtolower($_file_)==="docx"
            || strtolower($_file_)==="xlsx" || strtolower($_file_)==="xls"
            || strtolower($_file_)==="pptx" || strtolower($_file_)==="ppt"
            || strtolower($_file_)==="accdb") {
            $fileDisplay = $this->display_google_iframe($filename);
        } else {
            $fileDisplay = "Unable To Display File";
        }
        return $fileDisplay;
    }

}
